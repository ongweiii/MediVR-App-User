import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import cn from "classnames";
import { getChecklist } from "./Api";
import "./_organizationflow.scss";
import { CategoryMappings } from "./mappings";

const OrganizationFlowPage = () => {
  let { id, ts } = useParams();
  const [checklist, setChecklist] = useState([]);

  useEffect(() => {
    
    getChecklist(id, ts).then((data2) => {
      setChecklist(data2);
    });
  }, []);

  return (
    <div>
      <h5 className="title">Organisation Flow</h5>
      <div className="headers">
        <div className="cell">Category</div>
        <div className="cell">Intent</div>
      </div>
      {console.log(checklist)}
      {checklist && !_.isEmpty(checklist)
        ? 
          (checklist.map((item, index) => {

              const categoryPrefix = item.action
                .substring(0, item.action.indexOf("_"));

              const { category, className: categoryClass } =
                CategoryMappings[categoryPrefix];

              const intent = item.action
                .substring(item.action.indexOf("_") + 1)
                .toUpperCase();

              return (
                <div key={index} className="entries">
                  {/* <div>{item.category}</div>
                  <div>{item.intent.toUpperCase()}</div> */}
                  <div className={cn("category-block", categoryClass)}>
                    {category}
                  </div>
                  <div className="intent">{intent}</div>
                </div>
              );
    
            }))
          
        : null }
        
      </div>
  );
};

export default OrganizationFlowPage;
