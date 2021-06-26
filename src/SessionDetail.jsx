import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import moment from "moment";
import cn from "classnames";
import _ from "lodash";
import {
  getConversation,
  getChecklist,
  getChecklistTemplate,
  deleteSession,
} from "./Api";
import "./_sessiondetails.scss";

export default function SessionDetail() {
  let { id, ts } = useParams();
  let { sessionNumber } = useState()
  const [convo, setConvo] = useState([]);
  const [convoLoaded, setConvoLoaded] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [checklistTemplate, setChecklistTemplate] = useState({});
  const [checklistLoaded, setChecklistLoaded] = useState(false);
  const [checklistTemplateLoaded, setChecklistTemplateLoaded] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getConversation(id, ts).then((data) => {
      setConvo(data);
      setConvoLoaded(true);
    });
    getChecklistTemplate().then((data) => {
      setChecklistTemplate(data);
      setChecklistTemplateLoaded(true);
      getChecklist(id, ts).then((data2) => {
        setChecklist(data2);
        setChecklistLoaded(true);
      });
    });
  }, [id, ts]);

  const sessionDuration = (convoList) => {
    var start = convoList[0].timestamp;
    var end = convoList[convoList.length-1].timestamp;
    var duration = moment(end).diff(start);
    var formatted = moment.utc(duration*1000).format('mm:ss');
    return(
      <p className="session-duration">Session duration : {formatted}</p>
    )
  };

  const renderSession = (id, string) => {
    var res = string.split("/"),
      sessionNum = require("./SessionsList")
    return (
      <h1 className="session-details">
        {id}: Session
      </h1>
    );
  };

  const renderSection = (checklisttemp) => {
    return(
    Object.keys(checklisttemp).map(section=>
        <div className="checklist-sections">
          <h6 className="section-head">{section}</h6>
          <div className="checklist-box">
            {checklistTemplate[section].map((check) => (
              <div className="checklist-item">
                <input
                  type="checkbox"
                  checked={checkActionInSession(check["intent"])}
                />
                <span className="checkmark">{check.description}</span>
              </div>
            ))}
          </div>
        </div>
    ))};

  const checkActionInSession = (actionName) => {
    return checklist.some(
      (el) => el["action"] === actionName || actionName.includes(el["action"])
      );
  };

  const checklistScore = (checkList) =>{
    var val = 0,
    sub = Object.values(checkList),
    count = sub.map(x => x.length),
    count2 = count.reduce((a, b) => a + b, 0),
    key = Object.keys(checkList),
    counter = key.map(key => 
      checklistTemplate[key].map(check =>
          {checkActionInSession(check["intent"])? val++ : val}
        ));
    return (
    <h5 className="indv-session-btn">
    Checklist: {val}/{count2}
    </h5>)
  };


  return (
    <div className={cn("container", "session-details-container")}>
      <div className="mb-4 text-muted">
        {renderSession(id, window.location.href)}
        <p className="box">
        <h6>{moment(ts * 1000).format("D MMM YYYY h:mma")}</h6>
        </p>
      </div>
<div className="sessionDetailsInfo">
      {convoLoaded ? sessionDuration(convo) : <p>NIL</p>}
      <div className="float-container">
      <div className="container-checklist">
        {checklistTemplateLoaded ? checklistScore(checklistTemplate): <h5/>}
        <div className="container-checklist-items">
          {checklistLoaded ? (
            <div className="p-2">
              {renderSection(checklistTemplate)}
            </div>
          ) : (
            <h6 style={{ marginTop: "20px" }}>Loading...</h6>
          )}
        </div>
        </div>
        <div className="container-checklist">
          <h5 className="convo-title">Conversation</h5>
          <div className="container-checklist-items">
          {convoLoaded && !_.isEmpty(convo) ? (
            convo.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-row justify-content-${
                  item.event === "bot" ? "start" : "end"
                } align-items-center `}
              >
                <div
                  style={{
                    maxWidth: "75%",
                  }}
                  className={`text-${item.event === "bot" ? "left" : "right"}`}
                >
                  <div className="indv-convo">
                    <span className="convo-person">{item.event} :</span>
                    <br />
                    <span className="convo-text">{item.text}</span>
                    <br />
                  <small className="timestamp">
                    {moment(item.timestamp * 1000).format("h:mma")}
                  </small>
                  </div>
                </div>
              </div>
            ))
          ) : convoLoaded && _.isEmpty(convo) ? (
            <h6 style={{ marginTop: "20px" }}>No Conversations Found!</h6>
          ) : (
            <h6 style={{ marginTop: "20px" }}>Loading...</h6>
          )}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
