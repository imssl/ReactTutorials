import SideBar from './SideBar.jsx'
import NavigationBar from './NavigationBar.jsx'
import EuroConverter from './EuroConverter.jsx'


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
           <EuroConverter />
      </div>
     
      
      <footer className="footer">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Creative Tim
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
          <div className="copyright">
            ©
            <script>
              document.write(new Date().getFullYear())
            </script>2018 made with <i className="tim-icons icon-heart-2"></i> by
            <a href="" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default MasterPage;
