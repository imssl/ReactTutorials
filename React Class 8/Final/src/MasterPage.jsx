import SideBar from './SideBar.jsx'
import DefaultPage from './DefaultPage.jsx'
import NavigationBar from './NavigationBar.jsx'
import DashboardPage from './DashboardPage.jsx'
import GridDemoPage from './GridDemoPage.jsx'
import FormDetail from './FormDetail.jsx'
import EuroConverter from './EuroConverter.jsx'

import ParentComponent from './demo/updates/ParentComponent.jsx'
import ShallowCompareDemo from './demo/shallow/ShallowCompareDemo.jsx'
import CounterComponent from './demo/state/CounterComponent.jsx'


import {Route,Switch } from 'react-router-dom';

function MasterPage() {
  return (
    <div className="wrapper">
   {/*
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    */}

      {/* Sidebar Start */}
      <SideBar />   
      {/* Sidebar End */}


    <div className="main-panel">
      {/* Navbar Start */}
      <NavigationBar />
      {/* End Navbar */}


      <div className="content">

        <Switch>
            <Route exact path="/" component={DefaultPage}/>
            <Route path="/dashboard" component={DashboardPage}/>
            <Route path="/formDetail" component={FormDetail}/> 
            <Route path="/gridDemo" component={GridDemoPage}/> 
            <Route path="/euroconverter" component={EuroConverter}/>

            <Route path="/shallow" component={ShallowCompareDemo}/> 
            <Route path="/optimizations" component={ParentComponent}/> 
            <Route path="/state" component={CounterComponent}/> 
          </Switch>

         {/* Inside Content Start */}
         {/* <DefaultPage />        */}
          {/* Inside Content End */}

          {/* Alternative DashboardPage Start */}
          {/* <DashboardPage />  */}
           {/* Alternative DashboardPage  End */}


          {/* Alternative GridDemoPage Start */}
          {/* <GridDemoPage /> */}
           {/* Alternative GridDemoPage  End */}

          {/* <ParentComponent /> */}
          {/* <ShallowCompareDemo /> */}
          
          {/* <CounterComponent />  */}
          
      </div>
     
      
      <footer className="footer">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Creative Tim
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
          <div className="copyright">
            ©
            <script>
              document.write(new Date().getFullYear())
            </script>2018 made with <i className="tim-icons icon-heart-2"></i> by
            <a href="#" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default MasterPage;
