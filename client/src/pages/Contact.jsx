import React, { useContext } from "react";
import { useState } from "react";
const url = "http://localhost:3000";

const Contact = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [comentario, setComentario] = useState([]);

  const enviarComentario = async () => {
    const post = { name, email, comentario };
    await axios.post(url + "/comentario", post);
    getPosts();
  };

  return (
    <div className="login-container input-group d-flex justify-content-center ">
      <div className="card-container flex-column ">
        <div className="cad-container justify-content-center mt-5">
          <div className="cart d-flex flex-column">
            <div>
              <h6 className="mb-3 text-center ">Contáctanos</h6>
            </div>
            <div className="cart-form text-center ">
              <label className="mb-2">Nombre</label>
              <input
                placeholder="Nombre"
                onChange={(event) => setName(event.target.value)}
                className="form-control"
              />
              <div className="mb-2 text-center">
                <label className="m-2">Email</label>
                <input
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3 text-center">
                <label>Comentario</label> <br />
                <textarea
                  placeholder="Comentario"
                  onChange={(event) => setComentario(event.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="d-flex ">
                <button
                  onClick={enviarComentario}
                  className="btn btn-light m-auto "
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
