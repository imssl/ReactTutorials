function MasterPage() {
  return (
    <div className="wrapper">
    <div className="sidebar">
      {/*
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    */}
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
            <a href="./dashboard.html">
              <i className="tim-icons icon-chart-pie-36"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="./icons.html">
              <i className="tim-icons icon-atom"></i>
              <p>Icons</p>
            </a>
          </li>
          <li>
            <a href="./map.html">
              <i className="tim-icons icon-pin"></i>
              <p>Maps</p>
            </a>
          </li>
          <li>
            <a href="./notifications.html">
              <i className="tim-icons icon-bell-55"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li>
            <a href="./user.html">
              <i className="tim-icons icon-single-02"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a href="./tables.html">
              <i className="tim-icons icon-puzzle-10"></i>
              <p>Table List</p>
            </a>
          </li>
          <li>
            <a href="./typography.html">
              <i className="tim-icons icon-align-center"></i>
              <p>Typography</p>
            </a>
          </li>
          <li>
            <a href="./rtl.html">
              <i className="tim-icons icon-world"></i>
              <p>RTL Support</p>
            </a>
          </li>
          <li className="active-pro">
            <a href="./upgrade.html">
              <i className="tim-icons icon-spaceship"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-panel">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand" href="">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="search-bar input-group">
                <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="tim-icons icon-zoom-split" ></i>
                  <span className="d-lg-none d-md-block">Search</span>
                </button>
              </li>
              <li className="dropdown nav-item">
                <a href="" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="notification d-none d-lg-block d-xl-block"></div>
                  <i className="tim-icons icon-sound-wave"></i>
                  <p className="d-lg-none">
                    Notifications
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link"><a href="#" className="nav-item dropdown-item">Mike John responded to your email</a></li>
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">You have 5 more tasks</a></li>
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">Your friend Michael is in town</a></li>
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">Another notification</a></li>
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">Another one</a></li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="photo">
                    <img src="../assets/img/anime3.png" alt="Profile Photo" />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block"></b>
                  <p className="d-lg-none">
                    Log out
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-navbar">
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">Profile</a></li>
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">Settings</a></li>
                  <li className="dropdown-divider"></li>
                  <li className="nav-link"><a href="" className="nav-item dropdown-item">Log out</a></li>
                </ul>
              </li>
              <li className="separator d-lg-none"></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="modal modal-search fade" id="searchModal" tabIndex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Navbar */}
      <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="card card-chart">
              <div className="card-header ">
                <div className="row">
                  <div className="col-sm-6 text-left">
                    <h5 className="card-category">Total Shipments</h5>
                    <h2 className="card-title">Performance</h2>
                  </div>
                  <div className="col-sm-6">
                    <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
                      <label className="btn btn-sm btn-primary btn-simple active" id="0">
                        <input type="radio" name="options" defaultChecked={true} />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Accounts</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02"></i>
                        </span>
                      </label>
                      <label className="btn btn-sm btn-primary btn-simple" id="1">
                        <input type="radio" className="d-none d-sm-none" name="options" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Purchases</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2"></i>
                        </span>
                      </label>
                      <label className="btn btn-sm btn-primary btn-simple" id="2">
                        <input type="radio" className="d-none" name="options" />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sessions</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="chartBig1"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">Total Shipments</h5>
                <h3 className="card-title"><i className="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="chartLinePurple"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">Daily Sales</h5>
                <h3 className="card-title"><i className="tim-icons icon-delivery-fast text-info"></i> 3,500€</h3>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="CountryChart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">Completed Tasks</h5>
                <h3 className="card-title"><i className="tim-icons icon-send text-success"></i> 12,100K</h3>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="chartLineGreen"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card card-tasks">
              <div className="card-header ">
                <h6 className="title d-inline">Tasks(5)</h6>
                <p className="card-category d-inline">today</p>
                <div className="dropdown">
                  <button type="button" className="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                    <i className="tim-icons icon-settings-gear-63"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#pablo">Action</a>
                    <a className="dropdown-item" href="#pablo">Another action</a>
                    <a className="dropdown-item" href="#pablo">Something else</a>
                  </div>
                </div>
              </div>
              <div className="card-body ">
                <div className="table-full-width table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Update the Documentation</p>
                          <p className="text-muted">Dwuamish Head, Seattle, WA 8:47 AM</p>
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-link" data-original-title="Edit Task">
                            <i className="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" defaultChecked={true} />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">GDPR Compliance</p>
                          <p className="text-muted">The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.</p>
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-link" data-original-title="Edit Task">
                            <i className="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Solve the issues</p>
                          <p className="text-muted">Fifty percent of all respondents said they would be more likely to shop at a company </p>
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-link" data-original-title="Edit Task">
                            <i className="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Release v2.0.0</p>
                          <p className="text-muted">Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</p>
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-link" data-original-title="Edit Task">
                            <i className="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Export the processed files</p>
                          <p className="text-muted">The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. </p>
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-link" data-original-title="Edit Task">
                            <i className="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Arival at export process</p>
                          <p className="text-muted">Capitol Hill, Seattle, WA 12:34 AM</p>
                        </td>
                        <td className="td-actions text-right">
                          <button type="button" rel="tooltip" title="" className="btn btn-link" data-original-title="Edit Task">
                            <i className="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card ">
              <div className="card-header">
                <h4 className="card-title"> Simple Table</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table tablesorter " id="">
                    <thead className=" text-primary">
                      <tr>
                        <th>
                          Name
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          City
                        </th>
                        <th className="text-center">
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Dakota Rice
                        </td>
                        <td>
                          Niger
                        </td>
                        <td>
                          Oud-Turnhout
                        </td>
                        <td className="text-center">
                          $36,738
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Minerva Hooper
                        </td>
                        <td>
                          Curaçao
                        </td>
                        <td>
                          Sinaai-Waas
                        </td>
                        <td className="text-center">
                          $23,789
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sage Rodriguez
                        </td>
                        <td>
                          Netherlands
                        </td>
                        <td>
                          Baileux
                        </td>
                        <td className="text-center">
                          $56,142
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Philip Chaney
                        </td>
                        <td>
                          Korea, South
                        </td>
                        <td>
                          Overland Park
                        </td>
                        <td className="text-center">
                          $38,735
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Doris Greene
                        </td>
                        <td>
                          Malawi
                        </td>
                        <td>
                          Feldkirchen in Kärnten
                        </td>
                        <td className="text-center">
                          $63,542
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Mason Porter
                        </td>
                        <td>
                          Chile
                        </td>
                        <td>
                          Gloucester
                        </td>
                        <td className="text-center">
                          $78,615
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Jon Porter
                        </td>
                        <td>
                          Portugal
                        </td>
                        <td>
                          Gloucester
                        </td>
                        <td className="text-center">
                          $98,615
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
