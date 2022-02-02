import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
  return (
    <a
      href="/#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <FontAwesomeIcon icon={['faArrowAltCircleUp']}/>
    </a>
  );
};
export default BackToTop;