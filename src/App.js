import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';

import LogInP from './Provider/provider/LoginP';
import Profilep from './Provider/userp/Profilep';
import LogoutP from './Provider/provider/LogoutP';
import Homep from './Provider/provider/Homep';
import Update from './Provider/userp/Update';
import LogIn from './Seeker/seeker/LogIn';
import Homes from './Seeker/seeker/Homes';
import Profiles from './Seeker/users/Profiles';
import Updates from './Seeker/users/Updates';
import Logout from './Seeker/seeker/Logout';
import LogInC from './Client/LoginC';
import HomeC from './Client/HomeC';
import LogoutC from './Client/LogoutC';
import ProfileC from './Client/clientC/ProfileC';
import UpdateC from './Client/clientC/UpdateC';
import Main from './Main/Main';
import Contant from './Seeker/seeker/Contant';
import About from './Seeker/seeker/About';
import Adds from './Seeker/seeker/Adds';
import ContantA from './Admin/ContantA';
import AboutA from './Admin/AboutA';
import AddA from './Admin/AddA';
import HomeA from './Admin/HomeA';
import ViewA from './Admin/ViewA';
import UpdateA from './Admin/UpdateA';
import LoginAdmin from './Admin/LoginAdmin';
import LogoutAdmin from './Admin/LogoutAdmin';
import ContantC from './Client/ContantC';
import AboutC from './Client/AboutC';
import AddC from './Client/AddC';
import AddP from './Provider/provider/AddP';
import { Container } from '@mui/material';
import ContantP from './Provider/provider/ContantP';
import AboutP from './Provider/provider/AboutP';
import PageNotFound from './component/pages/PageNotFound';
import ProviderA from './Admin/ProviderA';
import SeekerA from './Admin/SeekerA';
import Search from './component/pages/Search';


function App() {
  return (
    <Router>
  <div className="App bg-light">
<Switch>
 <Route exact path="/" component={Main}></Route>
 <Route exact path="/logins" component={LogIn}></Route>
 <Route exact path="/contant" component={Contant}></Route>
 <Route exact path="/about" component={About}></Route>
 <Route exact path="/adds" component={Adds}></Route>
 <Route exact path="/homes" component={Homes}></Route>
 <Route exact path="/profiles/:id" component={Profiles}></Route>
 <Route exact path="/updates/:id" component={Updates}></Route>
 <Route exact path="/logins" component={Logout}></Route>
 <Route exact path="/search" component={Search}></Route>


 <Route exact path="/loginp" component={LogInP}></Route>
 <Route exact path="/addp" component={AddP}></Route>
 <Route exact path="/contantp" component={ContantP}></Route>
 <Route exact path="/aboutp" component={AboutP}></Route>
 <Route exact path="/homep" component={Homep}></Route>
 <Route exact path="/profilep/:id" component={Profilep}></Route>
 <Route exact path="/update/userp/:id" component={Update}></Route>
 <Route exact path="/loginp" component={LogoutP}></Route>

 <Route exact path="/loginc" component={LogInC}></Route>
 <Route exact path="/addc" component={AddC}></Route>
 <Route exact path="/contantc" component={ContantC}></Route>
 <Route exact path="/aboutc" component={AboutC}></Route>
 <Route exact path="/homec" component={HomeC}></Route>
 <Route exact path="/profilec/:id" component={ProfileC}></Route>
 <Route exact path="/update/userc/:id" component={UpdateC}></Route>
 <Route exact path="/loginp" component={LogoutC}></Route>
  
 <Route exact path="/loginadmin" component={LoginAdmin}></Route>
 <Route exact path="/providerA" component={ProviderA}></Route>
 <Route exact path="/seekerA" component={SeekerA}></Route>
 <Route exact path="/contantA" component={ContantA}></Route>
 <Route exact path="/aboutA" component={AboutA}></Route>
 <Route exact path="/addA" component={AddA}></Route>
 <Route exact path="/homeA" component={HomeA}></Route>
 <Route exact path="/viewA/:id" component={ViewA}></Route>
 <Route exact path="/updateA/:id" component={UpdateA}></Route>
 <Route exact path="/loginadmin" component={LogoutAdmin}></Route>
 <Route exact path="*" component={PageNotFound}></Route>
 </Switch>
  </div>
  </Router>

  );
}

export default App;
