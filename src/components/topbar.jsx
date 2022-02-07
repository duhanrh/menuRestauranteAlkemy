import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {
  return (
    <section
      id="topbar"
      className="bg-dark d-flex align-items-center fixed-top topbar-transparent" style = {{marginBottom: "60px"}}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
        <i className="bi d-flex align-items-center">
          <FontAwesomeIcon icon={["fa", "phone-alt"]} />
        </i>
        <span className="m-2">+57 XXX XXX XXXX</span>
        <i className="bi ms-4 d-none d-lg-flex align-items-center">
          <FontAwesomeIcon icon={["fa", "clock"]} />
        </i>
        <span className="m-2">Lun-Dom: 11:00 AM - 11:00 PM</span>
      </div>
    </section>
  );
};

export default TopBar;
