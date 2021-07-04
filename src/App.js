import { Helmet } from "react-helmet"
import Layout from "./Components/Layout"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <>
      <Helmet>
        <title>Team Paylend</title>
        <meta name="description" content="Welcome to Team Paylend. A community built around fintech" />
      </Helmet>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
