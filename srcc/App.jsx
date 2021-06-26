import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import SummaryPage from "./SummaryPage";
import Senders from "./Senders";
import Conversation from "./Conversation";
import Checklist from "./Checklist";
import SessionsList from "./SessionsList";
import SessionDetail from "./SessionDetail";
import OrganizationFlowPage from "./OrganizationFlowPage";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Senders} />
            <div className="app-container">
            <Sidebar className="app-sidebar" />
            <div className="app-content">
            <Route path="/sessions/:id" component={SessionsList} />
            <Route
              path="/session/:id/:ts/orgflow"
              component={OrganizationFlowPage}
            />
            <Route path="/session/:id/:ts/summary" component={SummaryPage} />
            <Route path="/session/:id/:ts/checklist" component={SessionDetail} />
            </div>
            </div>
          </Switch>
        
      </Router>
    </div>
  );
}
