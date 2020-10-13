import React, { Fragment } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const ButtonPrimary = styled.button`
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  background-color: #ff7141;
  color: #fff;
  border: 0;
  border-radius: 03rem;
  box-shadow: 0 0.5rem 1rem 0.1rem #ff714150;
`;

const Formulario = ({
  moneys,
  setMoneys,
  setRequest,
  rates,
  render,
  setRender,
  display,
  setDisplay,
}) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  const { dinero, fecha } = moneys;

  const handleChange = (e) => {
    setMoneys({
      ...moneys,
      [e.target.name]: e.target.value,
    });
    if (display) {
      setDisplay(false);
    }
  };

  Object.entries(rates).map(([rate, value]) => {
    let select = document.querySelector("#dinero");
    select.innerHTML += `<option key={rate}>${rate}</option>`;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequest(true);

    if (render !== "") {
      setRender({});
    }
  };

  return (
    <Fragment>
      <Form className="mt-5 text-left" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Selecciona la moneda de referencia</Form.Label>
          <Form.Control
            value={dinero}
            onChange={handleChange}
            as="select"
            name="dinero"
            id="dinero"
          >
            <option id="divisas" value="">
              Moneda
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingresa la fecha de cotización</Form.Label>
          <input
            type="date"
            max={today}
            onChange={handleChange}
            value={fecha}
            name="fecha"
            id="fecha"
            className="form-control"
          />
        </Form.Group>
        <ButtonPrimary style={{ outline: 0 }} type="submit">
          Buscar cotizaciones
        </ButtonPrimary>
      </Form>
    </Fragment>
  );
};

Formulario.propTypes = {
  moneys: PropTypes.object.isRequired,
  display: PropTypes.object.isRequired,
  rates: PropTypes.object.isRequired,
  render: PropTypes.object.isRequired,
  setMoneys: PropTypes.func.isRequired,
  setRequest: PropTypes.func.isRequired,
  setRender: PropTypes.func.isRequired,
  setDisplay: PropTypes.func.isRequired,
};

export default Formulario;
