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
      <Route exact path="/projects/new" component={ProjectFormContainer} />
      <Route exact path="/projects" component={ProjectsIndexContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <Route exact path="/" component={ProjectsIndexContainer} />
  </div>
);

export default Root;
