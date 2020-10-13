import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import {
  PaginaUno,
  PaginaDos,
  PaginaTres,
  PaginaCuatro,
  PaginaCinco,
  PaginaSeis,
  PaginaSiete,
  PaginaOcho,
} from "../pages/pages";

const ButtonPage = styled.button`
  margin: 02rem 0.2rem 02rem 0.2rem;
  color: #fff;
  background-color: #ff7141;
  border: 0;
  border-radius: 05rem;
  height: 02rem;
  width: 02rem;
`;

const Lista = ({ render }) => {
  const [paginaUno, setPaginaUno] = useState(false);
  const [paginaDos, setPaginaDos] = useState(false);
  const [paginaTres, setPaginaTres] = useState(false);
  const [paginaCuatro, setPaginaTCuatro] = useState(false);
  const [paginaCinco, setPaginaCinco] = useState(false);
  const [paginaSeis, setPaginaSeis] = useState(false);
  const [paginaSiete, setPaginaSiete] = useState(false);
  const [paginaOcho, setPaginaOcho] = useState(false);

  const Page1 = () => {
    setPaginaUno(false);
    setPaginaDos(false);
    setPaginaTres(false);
    setPaginaTCuatro(false);
    setPaginaCinco(false);
    setPaginaSeis(false);
    setPaginaSiete(false);
    setPaginaOcho(false);
  };

  const Page2 = () => {
    setPaginaUno(true);
    setPaginaDos(true);
    setPaginaTres(false);
    setPaginaTCuatro(false);
    setPaginaCinco(false);
    setPaginaSeis(false);
    setPaginaSiete(false);
    setPaginaOcho(false);
  };

  const Page3 = () => {
    setPaginaUno(true);
    setPaginaDos(false);
    setPaginaTres(true);
    setPaginaTCuatro(false);
    setPaginaCinco(false);
    setPaginaSeis(false);
    setPaginaSiete(false);
    setPaginaOcho(false);
  };

  const Page4 = () => {
    setPaginaUno(true);
    setPaginaDos(false);
    setPaginaTres(false);
    setPaginaTCuatro(true);
    setPaginaCinco(false);
    setPaginaSeis(false);
    setPaginaSiete(false);
    setPaginaOcho(false);
  };

  const Page5 = () => {
    setPaginaUno(true);
    setPaginaDos(false);
    setPaginaTres(false);
    setPaginaTCuatro(false);
    setPaginaCinco(true);
    setPaginaSeis(false);
    setPaginaSiete(false);
    setPaginaOcho(false);
  };

  const Page6 = () => {
    setPaginaUno(true);
    setPaginaDos(false);
    setPaginaTres(false);
    setPaginaTCuatro(false);
    setPaginaCinco(false);
    setPaginaSeis(true);
    setPaginaSiete(false);
    setPaginaOcho(false);
  };

  const Page7 = () => {
    setPaginaUno(true);
    setPaginaDos(false);
    setPaginaTres(false);
    setPaginaTCuatro(false);
    setPaginaCinco(false);
    setPaginaSeis(false);
    setPaginaSiete(true);
    setPaginaOcho(false);
  };

  const Page8 = () => {
    setPaginaUno(true);
    setPaginaDos(false);
    setPaginaTres(false);
    setPaginaTCuatro(false);
    setPaginaCinco(false);
    setPaginaSeis(false);
    setPaginaSiete(false);
    setPaginaOcho(true);
  };

  return (
    <Fragment>
      {paginaUno ? null : <PaginaUno render={render} />}
      {paginaDos ? <PaginaDos render={render} /> : null}
      {paginaTres ? <PaginaTres render={render} /> : null}
      {paginaCuatro ? <PaginaCuatro render={render} /> : null}
      {paginaCinco ? <PaginaCinco render={render} /> : null}
      {paginaSeis ? <PaginaSeis render={render} /> : null}
      {paginaSiete ? <PaginaSiete render={render} /> : null}
      {paginaOcho ? <PaginaOcho render={render} /> : null}

      <ButtonPage style={{ outline: 0 }} onClick={Page1}>
        01
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page2}>
        02
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page3}>
        03
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page4}>
        04
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page5}>
        05
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page6}>
        06
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page7}>
        07
      </ButtonPage>
      <ButtonPage style={{ outline: 0 }} onClick={Page8}>
        08
      </ButtonPage>
    </Fragment>
  );
};

Lista.propTypes = {
  render: PropTypes.object.isRequired,
};

export default Lista;
