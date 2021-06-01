import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar">
   
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="" className="simple-text logo-mini">
              CT
            </a>
            <a href="" className="simple-text logo-normal">
              Creative Tim
            </a>
          </div>
          <ul className="nav">
            <li className="active ">
              <Link to="/dashboard">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Dashboard</p>
              </Link>
            </li>               
            <li>
              <Link to="/formDetail">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>User Profile</p>
              </Link>
            </li>
            <li>
              <Link to="/gridDemo">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Grid Page</p>
              </Link>
            </li>
            <li>
              <Link to="/euroconverter">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>EuroConverter</p>
              </Link>
            </li>
            <li>
              <Link to="/shallow">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Shallow Compare</p>
              </Link>
            </li>
            <li>
              <Link to="/optimizations">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Optimizations</p>
              </Link>
            </li>
            <li>
              <Link to="/state">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Local State</p>
              </Link>
            </li>
          </ul>
        </div>    
  
      </div>
    )
}