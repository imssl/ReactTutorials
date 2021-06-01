import Sidebar from './Sidebar.jsx';
import MainPanel from './MainPanel.jsx';

function MasterPage() {
    return (
        <div className="wrapper">
            <div  className="SideBar">
		<Sidebar  />
	</div>
    <div  className="MainPanel">
		<MainPanel  />
	</div>
</div>
    );
}

export default MasterPage;