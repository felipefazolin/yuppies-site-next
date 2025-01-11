import Button from "@components/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const Form = ({ content, formType }) => {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();

  return (
    <div className="pt-7 pb-7 bg-salmon">
      <div className="container">
        <form className="row g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5">
          <div className="col-4">
            <h2 className="mb-4 form-title color-white">
              interessado em ter uma marca incrível?
            </h2>
          </div>
          <div className="col-8">
            <p className="mb-4 color-white">
              Preencha os dados e receba nossa proposta
            </p>
            <div className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nome"
                  required
                />
              </div>

              <div className="col-12">
                <PhoneInput
                  placeholder="Enter phone number"
                  className="form-control"
                  value={value}
                  onChange={setValue}
                  defaultCountry="BR"
                />
              </div>

              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="insta"
                  placeholder="Qual seu Instagram?"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Qual seu Website?"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="marca"
                  placeholder="Qual nome da sua marca?"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="ramo"
                  placeholder="Qual ramo de atuação?"
                  required
                />
              </div>

              <div className="col-12">
                <textarea
                  class="form-control"
                  id="textarea"
                  placeholder="Descreva em detalhes"
                  required
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Qual seu faturamento mensal?</option>
                  <option value="1">Entre R$10K e R$20K</option>
                  <option value="2">Entre R$20K e R$50K</option>
                  <option value="3">Entre R$50K e R$100K</option>
                  <option value="3">Entre R$100K e R$300K</option>
                  <option value="3">Entre R$300K e R$500K</option>
                  <option value="3">Entre R$500K e R$1M</option>
                </select>
              </div>

              <div className="col-12">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Quantos colaboradores possui?</option>
                  <option value="1">2 a 5 colaboradores </option>
                  <option value="2">6 a 10 colaboradores</option>
                  <option value="3">11 a 50 colaboradores</option>
                  <option value="3">51 a 100 colaboradores</option>
                  <option value="3">101 a 500 colaboradores</option>
                  <option value="3">Mais de 500 colaboradores</option>
                </select>
              </div>

              <div className="col-12">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Qual o seu segmento?</option>
                  <option value="1">Saúde</option>
                  <option value="2">Advocacia</option>
                  <option value="3">Agropecuária</option>
                  <option value="3">Construção</option>
                  <option value="3">Educação</option>
                  <option value="3">Indústria</option>
                  <option value="3">Prestação de Serviços</option>
                  <option value="3">Profissional autônomo</option>
                  <option value="3">Restaurante</option>
                  <option value="3">Fintech</option>
                  <option value="3">Tecnologia</option>
                  <option value="3">Transporte</option>
                  <option value="3">Turismo</option>
                  <option value="3">Varejo</option>
                  <option value="3">Venda de Produtos</option>
                  <option value="3">Outros</option>
                </select>
              </div>

              <div className="col-12 mt-4">
                <Button
                  label={"solicitar orçamento"}
                  bg={"button-bg-3"}
                  link={"/"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
