import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  border: 0;
  border-top: 0.1rem solid #eee;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0;
  outline: none;
`;

export const ItemGroup = styled.span`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  outline: none;
  width: 5rem;
`;

export const Item = styled.li`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  text-align: left;
  border: 0;
  padding: 0.3rem 0 0.3rem 0;
  outline: none;
`;

export const ButtonSecondary = styled.button`
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  background-color: #fff;
  color: #ff7141;
  border: 0.1rem solid #ff7141;
  border-radius: 03rem;
  box-shadow: 0 0.5rem 1rem 0.1rem #ff714150;
  margin-top: 2rem;
  outline: none;
`;

export const Pagina = ({ cod, rate, flag }) => {
  let url = `https://www.countryflags.io/${flag}/shiny/24.png`;
  return (
    <Fragment>
      <List>
        <Item>
          <ItemGroup>
            <img src={url} /> {cod}
          </ItemGroup>
          {rate}
        </Item>
      </List>
    </Fragment>
  );
};

export const PaginaUno = ({ cod, rate, render }) => {
  const [paginado, setPaginado] = useState(false);

  const moreInfo = () => {
    setPaginado(true);
  };
  return (
    <Fragment>
      <Pagina cod={"CAD"} rate={render["CAD"]} flag={"CA"} />
      <Pagina cod={"GBP"} rate={render["GBP"]} flag={"GB"} />
      <Pagina cod={"USD"} rate={render["USD"]} flag={"US"} />
      <Pagina cod={"EUR"} rate={render["EUR"]} flag={"EU"} />

      {paginado ? (
        <Fragment>
          <Pagina cod={"HKD"} rate={render["HKD"]} flag={"HK"} />
          <Pagina cod={"ISK"} rate={render["ISK"]} flag={"IS"} />
          <Pagina cod={"PHP"} rate={render["PHP"]} flag={"PH"} />
          <Pagina cod={"DKK"} rate={render["DKK"]} flag={"DK"} />
        </Fragment>
      ) : null}

      <ButtonSecondary style={{ outline: 0 }} onClick={moreInfo}>
        Ver más cotizaciones
      </ButtonSecondary>
    </Fragment>
  );
};

export const PaginaDos = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"HUF"} rate={render["HUF"]} flag={"HU"} />
      <Pagina cod={"CZK"} rate={render["CZK"]} flag={"CZ"} />
      <Pagina cod={"AUD"} rate={render["AUD"]} flag={"AU"} />
      <Pagina cod={"RON"} rate={render["RON"]} flag={"RO"} />
    </Fragment>
  );
};

export const PaginaTres = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"SEK"} rate={render["SEK"]} flag={"SE"} />
      <Pagina cod={"IDR"} rate={render["IDR"]} flag={"ID"} />
      <Pagina cod={"INR"} rate={render["INR"]} flag={"IN"} />
      <Pagina cod={"BRL"} rate={render["BRL"]} flag={"BR"} />
    </Fragment>
  );
};

export const PaginaCuatro = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"RUB"} rate={render["RUB"]} flag={"RU"} />
      <Pagina cod={"HRK"} rate={render["HRK"]} flag={"HR"} />
      <Pagina cod={"JPY"} rate={render["JPY"]} flag={"JP"} />
      <Pagina cod={"THB"} rate={render["THB"]} flag={"TH"} />
    </Fragment>
  );
};

export const PaginaCinco = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"CHF"} rate={render["CHF"]} flag={"CH"} />
      <Pagina cod={"SGD"} rate={render["SGD"]} flag={"SG"} />
      <Pagina cod={"PLN"} rate={render["PLN"]} flag={"PL"} />
      <Pagina cod={"BGN"} rate={render["BGN"]} flag={"BG"} />
    </Fragment>
  );
};

export const PaginaSeis = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"TRY"} rate={render["TRY"]} flag={"TR"} />
      <Pagina cod={"CNY"} rate={render["CNY"]} flag={"CN"} />
      <Pagina cod={"NOK"} rate={render["NOK"]} flag={"NO"} />
      <Pagina cod={"NZD"} rate={render["NZD"]} flag={"NZ"} />
    </Fragment>
  );
};

export const PaginaSiete = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"ZAR"} rate={render["ZAR"]} flag={"ZA"} />
      <Pagina cod={"MXN"} rate={render["MXN"]} flag={"MX"} />
      <Pagina cod={"ILS"} rate={render["ILS"]} flag={"IL"} />
      <Pagina cod={"KRW"} rate={render["KRW"]} flag={"KR"} />
    </Fragment>
  );
};

export const PaginaOcho = ({ cod, rate, render }) => {
  return (
    <Fragment>
      <Pagina cod={"MYR"} rate={render["MYR"]} flag={"MY"} />
    </Fragment>
  );
};
