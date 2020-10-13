import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Formulario";
import Lista from "./components/Lista";
import { Container, Row, Col } from "react-bootstrap";


function App() {

  const [moneys, setMoneys] = useState({
    dinero: "USD",
    fecha: "latest",
  });

  const [request, setRequest] = useState(true);

  const [rates, setRates] = useState({});

  const [render, setRender] = useState({});

  const [display, setDisplay] = useState(false);

  const { dinero, fecha } = moneys;


  useEffect(() => {
    const reqAPI = async () => {
      if (request) {
        const url = `https://api.exchangeratesapi.io/${fecha}?base=${dinero}`;
        const response = await fetch(url);
        const result = await response.json();
        setRender(result.rates);
        setRequest(false);
        setDisplay(true);
      }
    };
    reqAPI();
  }, [request]);

  useEffect(() => {
    const reqRates = async () => {
      const urlRates = `https://api.exchangeratesapi.io/latest`;

      const responseRates = await fetch(urlRates);
      const resultRates = await responseRates.json();

      setRates(resultRates.rates);
    };
    reqRates();
  }, [request]);

  return (
      <Fragment>
        <Container>
          <Row className="py-5 px-5 text-center justify-content-md-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
              <h3>Histórico de cotizaciones</h3>
              <Form
                moneys={moneys}
                setMoneys={setMoneys}
                setRequest={setRequest}
                rates={rates}
                setRender={setRender}
                render={render}
                display={display}
                setDisplay={setDisplay}
              />
            </Col>
          </Row>
          <Row className="px-5 text-center justify-content-md-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
              
            <Lista render={render}/>

            </Col>
          </Row>
        </Container>
      </Fragment>
  );
}

export default App;
