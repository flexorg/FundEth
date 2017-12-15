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
      <Route path="/" component={ProjectsIndexContainer} />
      <Route path="/projects/new" component={ProjectFormContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
    </Switch>
    <ProjectForm />
  </div>
);

export default Root;
