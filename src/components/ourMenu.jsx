

const OurMenu = () => {
  return(
    <section id="menu" className="menu">
          <div className="container">
            <div className="section-title">
              <h2>
              Nuestro <span>Menú</span>
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li data-filter="*" className="filter-active">
                    Mostrar todo
                  </li>
                  <li data-filter=".filter-starters">Entradas</li>
                  <li data-filter=".filter-salads">Ensaladas</li>
                  <li data-filter=".filter-specialty">Especialidad</li>
                </ul>
              </div>
            </div>

            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="/#">Sopa de Langosta</a>
                  <span>$30.00</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="/#">Pastel de Cangrejo</a>
                  <span>$16.80</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="/#">Filet Mignon</a>
                  <span>$15.00</span>
                </div>
                <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="/#">Pulpo a la gallega</a>
                  <span>$85.00</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="/#">Filet Avestruz</a>
                  <span>$120.00</span>
                </div>
                <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="/#">Palo de Mozzarella</a>
                  <span>$4.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="/#">Postre de milo</a>
                  <span>$6.25</span>
                </div>
                <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="/#">Ensalada griega</a>
                  <span>$9.95</span>
                </div>
                <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="/#">Sancocho trifásico</a>
                  <span>$15.80</span>
                </div>
                <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="/#">Sushi</a>
                  <span>$18.80</span>
                </div>
                <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
                </div>
              </div>

            </div>
          </div>
        </section>
  );
}

export default OurMenu;