import Button from "@components/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";


const Form = ({ content }) => {
  const [value, setValue] = useState();

  // Verifica se o input deve ser ocultado
  const shouldHideInput = (inputName) => !content.inputs.includes(inputName);

  return (
    <div className="pt-7 pb-7 bg-salmon">
      <div className="container">
        <form className="row g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5">
          <div className="col-4">
            <h2 className="mb-4 form-title color-white">
              {content.title || "Formulário"}
            </h2>
            <p className="mb-4 color-white">
              Preencha os dados e receba nossa proposta
            </p>
          </div>
          <div className="col-8">
           
            <div className="row g-3">
              <div className={`col-12 ${shouldHideInput("name") ? "hide" : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nome"
                  required
                />
              </div>

              <div className={`col-12 ${shouldHideInput("whats") ? "hide" : ""}`}>
                <PhoneInput
                  placeholder="Enter phone number"
                  className="form-control"
                  value={value}
                  onChange={setValue}
                  defaultCountry="BR"
                />
              </div>

              <div className={`col-12 ${shouldHideInput("email") ? "hide" : ""}`}>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div className={`col-12 ${shouldHideInput("insta") ? "hide" : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  id="insta"
                  placeholder="Qual seu Instagram?"
                  required
                />
              </div>

              <div className={`col-12 ${shouldHideInput("website") ? "hide" : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Qual seu Website?"
                  required
                />
              </div>

              <div className={`col-12 ${shouldHideInput("marca") ? "hide" : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  id="marca"
                  placeholder="Qual nome da sua marca?"
                  required
                />
              </div>

              <div className={`col-12 ${shouldHideInput("ramo") ? "hide" : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  id="ramo"
                  placeholder="Qual ramo de atuação?"
                  required
                />
              </div>

              <div className={`col-12 ${shouldHideInput("descricao") ? "hide" : ""}`}>
                <textarea
                  className="form-control"
                  id="textarea"
                  placeholder="Descreva em detalhes"
                  required
                  rows="3"
                ></textarea>
              </div>

              <div className={`col-12 ${shouldHideInput("faturamento") ? "hide" : ""}`}>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Qual seu faturamento mensal?</option>
                  <option value="1">Entre R$10K e R$20K</option>
                  <option value="2">Entre R$20K e R$50K</option>
                  <option value="3">Entre R$50K e R$100K</option>
                  <option value="4">Entre R$100K e R$300K</option>
                  <option value="5">Entre R$300K e R$500K</option>
                  <option value="6">Entre R$500K e R$1M</option>
                </select>
              </div>

              <div className={`col-12 ${shouldHideInput("colaboradores") ? "hide" : ""}`}>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Quantos colaboradores possui?</option>
                  <option value="1">2 a 5 colaboradores</option>
                  <option value="2">6 a 10 colaboradores</option>
                  <option value="3">11 a 50 colaboradores</option>
                  <option value="4">51 a 100 colaboradores</option>
                  <option value="5">101 a 500 colaboradores</option>
                  <option value="6">Mais de 500 colaboradores</option>
                </select>
              </div>

              <div className={`col-12 ${shouldHideInput("segmento") ? "hide" : ""}`}>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Qual o seu segmento?</option>
                  <option value="1">Saúde</option>
                  <option value="2">Advocacia</option>
                  <option value="3">Agropecuária</option>
                  <option value="4">Construção</option>
                  <option value="5">Educação</option>
                  <option value="6">Indústria</option>
                  <option value="7">Prestação de Serviços</option>
                  <option value="8">Profissional autônomo</option>
                  <option value="9">Restaurante</option>
                  <option value="10">Fintech</option>
                  <option value="11">Tecnologia</option>
                  <option value="12">Transporte</option>
                  <option value="13">Turismo</option>
                  <option value="14">Varejo</option>
                  <option value="15">Venda de Produtos</option>
                  <option value="16">Outros</option>
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
