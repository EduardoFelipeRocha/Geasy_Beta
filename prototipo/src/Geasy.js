import React from "react";
import "./Geasy.css";
import { useNavigate } from "react-router-dom";

const Geasy = () => {
  const navigate = useNavigate();

  return (
    <div className="geasy-container">
      <header className="geasy-header">
        <h1>Geasy</h1>
        <button
          className="geasy-btn"
          onClick={() => navigate("/login")}
        >
          Acesse Agora
        </button>
      </header>

      <section className="geasy-introduction">
        <h2>O que é o Geasy?</h2>
        <p>
          O Geasy é uma plataforma digital desenvolvida para conectar
          colaboradores ao setor de RH, garantindo eficiência, praticidade e
          segurança em todas as interações. Seja para consulta de benefícios,
          envio de documentos ou resolução de dúvidas, o Geasy transforma a
          experiência do usuário.
        </p>
      </section>

      <section className="geasy-features">
        <h2>Por que escolher o Geasy?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Facilidade</h3>
            <p>Interaja com o RH de maneira rápida e intuitiva.</p>
          </div>
          <div className="feature-item">
            <h3>Eficiência</h3>
            <p>Reduza o tempo gasto com processos burocráticos.</p>
          </div>
          <div className="feature-item">
            <h3>Segurança</h3>
            <p>Garanta a proteção das suas informações.</p>
          </div>
          <div className="feature-item">
            <h3>Integração</h3>
            <p>Compatível com as principais ferramentas de gestão.</p>
          </div>
          <div className="feature-item">
            <h3>Flexibilidade</h3>
            <p>Adapte o sistema às necessidades da sua empresa.</p>
          </div>
          <div className="feature-item">
            <h3>Suporte</h3>
            <p>Equipe sempre pronta para te ajudar.</p>
          </div>
          <div className="feature-item">
            <h3>Notificações</h3>
            <p>
              Fique por dentro de prazos importantes com lembretes automáticos.
            </p>
          </div>
          <div className="feature-item">
            <h3>Relatórios</h3>
            <p>
              Obtenha análises detalhadas para uma melhor tomada de decisão.
            </p>
          </div>
        </div>
      </section>

      <footer className="geasy-footer">
        <p>© 2024 Geasy. Todos os direitos reservados.</p>
        <p>
          <a href="/termos">Termos de Uso</a> | <a href="/privacidade">Política de Privacidade</a>
        </p>
        <p>
          Entre em contato conosco:{" "}
          <a href="mailto:suporte@geasy.com">suporte@geasy.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Geasy;
