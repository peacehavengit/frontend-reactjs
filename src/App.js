import { Route, Switch } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';

import Login from "./components/public/login";
import Signup from "./components/public/signup";
import Homepage from "./components/secure/homepage";
import CreateRepo from "./components/secure/create-repo";
import Repositories from "./components/secure/repositories";
import RepositoryDetail from "./components/secure/repository-detail";
import Settings from "./components/secure/settings";
import Profile from "./components/secure/profile";
import Support from "./components/secure/support";
import Faq from "./components/secure/faq";

function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/create-repo" component={CreateRepo} />
        <Route exact path="/repositories" component={Repositories} />
        <Route exact path="/repository-detail" component={RepositoryDetail} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
