const Index2 = () => {
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Inner Page</h2>
            <ol>
              <li>
                <a href="index">Home</a>
              </li>
              <li>Inner Page</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <p>Example inner page template</p>
        </div>
      </section>
    </main>
  );
};

export default Index2;
