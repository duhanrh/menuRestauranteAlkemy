const MenuItem = ({ data, delFromCart }) => {
//   let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{data.title}</h4>
      <h5>
        ${data.pricePerServing}
      </h5>
      <h5>
        {data.vegan ? "Vegano": "No Vegano" }
      </h5>

      <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button
              className="btn btn-outline-dark"
              onClick={() => delFromCart(data.id)}>Eliminar
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => delFromCart(data.id)}>Detalles
            </button>
          </div>
        </div>
    </div>
  );
};

export default MenuItem;