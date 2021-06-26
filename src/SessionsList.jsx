import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import _ from "lodash";
import { Link } from "react-router-dom";
import moment from "moment";
import "./_sidebar.scss";
import { deleteSender, getSessions } from "./Api";
export default function SessionsList() {
  let { id } = useParams();

  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getSessions(id).then((data) => {
      setList(data);
      setLoaded(true);
    });
  }, [id]);

  return (
    <div className="container">
      <h1 className="session-details">{id}</h1>
<br/>
      
      {loaded && !_.isEmpty(list) ? (
        list
          .slice(0)
          .reverse()
          .map((item, index) => (
            <div className="mb-2">
              <Link
                className="text-decoration-none"
                to={`/session/${id}/${item.timestamp}/summary`}
              >
                <div
                  key={index}
                  className="indv-session-btn"
                >
                  <h6 className="session-num">
                    Session {list.length - index}
                  </h6>
                  <small>
                    {moment(item.timestamp * 1000).format("Do MMM YYYY, h:mma")}
                  </small>
                </div>
              </Link>
            </div>
          ))
      ) : loaded && _.isEmpty(list) ? (
        <h6>No items found!</h6>
      ) : (
        <h6>Loading...</h6>
      )}
      <div id="back" name="back">
      </div>
    </div>
  );
}
