import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  BrowserRouter
} from 'react-router-dom';
// React components
import NavBar from './navbar';
import ProjectFormContainer from './project_form_container';
import ProjectsIndexContainer from './projects_index_container';
import ProjectShowContainer from './project_show_container';

// <ProjectsIndex />
// <ProjectShow />

const Root = () => (
  <div className="outer-main-container">
    <NavBar />
    <Switch>
      <Route path="/projects/new" component={ProjectFormContainer} />
      <Route path="/projects" component={ProjectsIndexContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <Route path="/" component={ProjectsIndexContainer} />
    </Switch>
  </div>
);

export default Root;
