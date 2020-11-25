import React from "react";
import MenuDropdown from "../../components/MenuDropdown";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./styles.css";

import businessSweet from "../../assets/business_sweet.jpg";
import authorProfile from "../../assets/author_profile.webp";
import businessModel from "../../assets/business_model.png"

const Business = () => {
  const userName = localStorage.getItem("userName");
  return (
    <div id="businessPage">
      <NavBar children={userName} />
      <MenuDropdown />
      <div className="initial-container">
        <div className="title">Negócios e Doces </div>
        <div className="author-container">
          <img
            src={authorProfile}
            alt="Foto da equipe"
            className="image-profile"
          />
          <div className="developers-medias">
            <span className="developer-description">
              Equipe Doce Açucarado | Redação
            </span>
            <span className="post-description">
              Postado em 20/11/2020, 12h20
            </span>
          </div>
        </div>
        <img src={businessSweet} alt="Negócios e Doces" />
      </div>
      <div className="report-container">
        <h1 className="report-title">Um negócio, vale a pena?</h1>
        <p>
          <b>Q</b>uem nunca ouviu falar das maravilhas em abrir seu próprio
          negócio? Uma <strong>confeitaria </strong>
          então, sensacional! Renda própria, horários flexíveis e ausência de um
          chefe, são alguns dos benefícios que esta conquista traz. É, estar no
          controle é incrível, certo?{" "}
        </p>

        <p>
          Contudo, querido leitor, deve-se tomar muito cuidado em diversos
          fatores ao criar seu negócio, ainda mais se for o seu primeiro. O
          negócio será algo novo, inédito? Ou então uma franquia? Bom, as opções
          são vastas, assim como os <strong style={{color: 'red'}}>perigos</strong>.
        </p>

        <p>
          Golpes, financiamentos bancários e conflitos com possíveis sócios, são
          alguns dos obstáculos que pode se ter pela frente. Poré, caro leitor,
          a pior pedra no caminho existente, é, sem dúvidas, a{" "}
          <strong>falta de planejamento</strong>.
        </p>
        <h1 className="report-title">Como se planejar?</h1>
        <p>
          Você deve estar se perguntando: "Como devo me preparar então para esse
          grande desafio?". Fique tranquilo que nós te ajudamos.
        </p>
        <p>
          Um dos principais instrumentos usados para planejar seu novo empreendimento, é o
          <strong>Modelo de Negócios</strong>. Por meio de uma tabela, esse modelo te ajudará
          a conhecer os principais campos do seu negócio, como o público-alvo, custos (tanto
          de aluguéis como em mão de obra) e o mercado que sua empresa atuará. Ter conhecimento 
          desses aspectos é essencial para um <strong style={{color: 'green'}}>negócio de sucesso</strong>!.
        </p>
        <h1 className="report-title">Exemplo</h1>
        <p>Para te ajudar mais ainda, segue abaixo um Modelo de Negócios de Uma
        parceira da Doce Açucarado, a empresa cultural <strong>FriendlyCulture</strong>.
        </p>
        <img src={businessModel} alt="Modelo de Negócios" />
        <p>É isso caro confeiteiro, esperamos ter ajudado :) Agora, siga seus sonhos e boa sorte!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Business;
