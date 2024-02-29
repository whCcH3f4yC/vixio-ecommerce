import React from "react";

const Main = () => {
  const [categoria, setCategoria] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products${categoria ? categoria : ""}`)
      .then((Response) => Response.json())
      .then((json) => setData(json));
    setLoading(false);
  }, [categoria]);

  if (loading) {
    return <div className="text.certer"> Carregando...</div>;
  }

  return (
    <>
      <div className="p-3 bg-light mb-4  text-center ">
        <nav>
          <ul className=" list-unstyled d-flex justify-content-center ">
            <li>
              <a
                href="null"
                className=" me-5  text-decoration-none text-black fw-semibold "
                type="button"
                onClick={() => setCategoria()}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="null"
                className=" me-5 text-decoration-none text-black fw-semibold "
                type="button"
                onClick={(e) => setCategoria("/category/" + e.target.innerText)}
              >
                electronics
              </a>
            </li>
            <li>
              <a
                href="null"
                className=" me-5 text-decoration-none text-black fw-semibold "
                type="button"
                onClick={(e) => setCategoria("/category/" + e.target.innerText)}
              >
                jewelery
              </a>
            </li>
            <li>
              <a
                href="null"
                className=" me-5 text-decoration-none text-black fw-semibold "
                type="button"
                onClick={(e) => setCategoria("/category/" + e.target.innerText)}
              >
                men's clothing
              </a>
            </li>
            <li>
              <a
                href="null"
                className=" me-5 text-decoration-none text-black fw-semibold "
                type="button"
                onClick={(e) => setCategoria("/category/" + e.target.innerText)}
              >
                women's clothing
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className=" container ">
        <div className="row mb-5">
          {data &&
            data.map((produto) => (
              <div
                key={produto.id}
                className="card m-1 "
                style={{ width: "20rem" }}
              >
                <div className="d-flex justify-content-center ">
                  <img className="img" src={produto.image} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title titleProduct">{produto.title}</h5>
                  <p className="card-text descriptionProduct">
                    {produto.description}
                  </p>
                  <div className="d-flex justify-content-center ">
                    <a href="null" className=" btn btn-sm  btn-primary">
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Main;
