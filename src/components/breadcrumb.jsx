const BreadCrumb = () => {
  return (
      <div className="alert alert-warning" role="alert" style={{borderRadius:"1rem"}}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb inndigo">
            <li className="breadcrumb-item">
              <a href="/#">Administración</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Modulo
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Nombre
            </li>
          </ol>
        </nav>
      </div>

    // <div className="row mt-60 pt-6">
    //   <div className="col-auto col-md-10 ">
    //     <nav aria-label="breadcrumb " className="first d-md-flex">
    //       <ol className="breadcrumb  ">
    //         <li className="breadcrumb-item font-weight-bold">
    //           <a className="black-text text-uppercase " href="/administrator/">
    //             <span>Administración</span>
    //           </a>
    //           <img
    //             className="ml-md-3"
    //             src="https://img.icons8.com/offices/30/000000/double-right.png"
    //             width="20"
    //             height="20"
    //           />{" "}
    //         </li>
    //         <li className="breadcrumb-item font-weight-bold">
    //           <a className="black-text text-uppercase" href="#">
    //             <span>about</span>
    //           </a>
    //           <img
    //             className="ml-md-3"
    //             src="https://img.icons8.com/offices/30/000000/double-right.png"
    //             width="20"
    //             height="20"
    //           />
    //         </li>
    //         <li className="breadcrumb-item font-weight-bold">
    //           <a className="black-text text-uppercase " href="#">
    //             <span>team</span>
    //           </a>
    //           <img
    //             className="ml-md-3"
    //             src="https://img.icons8.com/offices/30/000000/double-right.png"
    //             width="20"
    //             height="20"
    //           />{" "}
    //         </li>
    //         <li className="breadcrumb-item font-weight-bold mr-0 pr-0">
    //           <a className="black-text active-1" href="#">
    //             <span>Payam Daliri</span>
    //           </a>{" "}
    //         </li>
    //       </ol>
    //     </nav>
    //   </div>
    // </div>
  );
};

export default BreadCrumb;
