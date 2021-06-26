import React, { useState, useEffect } from "react";
import "./_summarypage.scss";
import { 
  AiOutlineTrophy, 
  AiOutlineOrderedList,
  AiOutlineFall,
  AiOutlinePlayCircle 
} from "react-icons/ai";
import { BiCommentDetail,BiTime } from "react-icons/bi";
import { VscChecklist } from "react-icons/vsc";
import { RiQuestionAnswerLine } from "react-icons/ri"

const SummaryPage = () => {
 
  return (
    <div>
    <div className="info">
      10 June 2010
    </div>
    
    <div className="grid-container">

      <div className="grid-item1">
        <div className="icon-container">
        <div className = "icon-orange" >
           <AiOutlineTrophy />
        </div>
        </div>
        <div className="content">
          <div className="status">Good</div>
          <div className="type">Final Diagnosis</div>
        </div>
      </div>

      <div className="grid-item1">
      <div className="icon-container">
        <div className = "icon-orange">
           <VscChecklist />
        </div>
        </div>
        <div className="content">
          <div className="status">Score:</div>
          <div className="type">Intents Covered</div>
        </div>
      </div>

      <div className="grid-item1">
        <div className="icon-container">
          <div className = "icon-green">
           <AiOutlineOrderedList />
          </div>
        </div>
        <div className="content">
          <div className="status">Good</div>
          <div className="type">Differential Diagnosis Covered</div>
        </div>
      </div>

      <div className="grid-item1">
      <div className="icon-container">
          <div className = "icon-green">
           <BiCommentDetail />
          </div>
        </div>
        <div className="content">
          <div className="status">Good</div>
          <div className="type">Summerization Comments</div>
        </div>
      </div>

      <div className="grid-item5">Summary of Intents Covered</div>
      <div className="grid-item6">Organisation Flow</div>
      
      <div className="grid-item1">
        <div className="icon-container">
          <div className = "icon-green">
           <BiTime />
          </div>
        </div>
        <div className="content">
          <div className="status">Good</div>
          <div className="type">Time Taken</div>
        </div>
      </div>

      <div className="grid-item1">
        <div className="icon-container">
          <div className = "icon-red">
           <AiOutlineFall />
          </div>
        </div>
        <div className="content">
          <div className="status">Good</div>
          <div className="type">Missed Intents</div>
        </div>
      </div>

      <div className="grid-item1">
        <div className="icon-container">
          <div className = "icon-blue">
           <RiQuestionAnswerLine />
          </div>
        </div>
        <div className="content">
          <div className="status">Good</div>
          <div className="type">No. of Questions Asked</div>
        </div>
      </div>

      <div className="grid-item1">
        <div className="icon-container">
          <div className = "icon-blue">
           <AiOutlinePlayCircle />
          </div>
        </div>
        <div className="rewatch">
          Rewatch
        </div>
      </div>
      
      <div className="grid-item11">Physical Examination Test</div>
    </div>
    </div>
  );
};

export default SummaryPage;
