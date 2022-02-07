import "../../assets/css/dashboard.css";
// import Contact from "../components/contact";
// //import ImgAbout from "../assets/img/about.jpg";
// import ImgChef1 from "../assets/img/chefs/chefs-1.jpg";
// import ImgChef2 from "../assets/img/chefs/chefs-2.jpg";
// import ImgChef3 from "../assets/img/chefs/chefs-3.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import BookTable from "../components/bookTable";

// import ImgEventCustom from "../assets/img/event-custom.jpg";
// import ImgEventFiesta from "../assets/img/event-birthday.jpg";
// import ImgEventPrivate from "../assets/img/event-private.jpg";
// import Testimonials from "../components/testimonials";

const Dashboard = () => {
  return (
    <>
       <main>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 color-du">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
    </main>
    </>
  );
};

export default Dashboard;