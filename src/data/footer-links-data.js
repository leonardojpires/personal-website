import cvFile from "../assets/CV/CV.pdf";

const footerLinks = {
  en: {
    Navigation: [
      { label: "Home", url: "/" },
      { label: "Work", url: "/#featured-projects" },
      { label: "About", url: "/#about" },
      { label: "Get in Touch", url: "/#contact" },
    ],
    Resources: [
      { label: "CV", url: cvFile },
      { label: "Blog", url: "#" },
      { label: "Case Studies", url: "#" },
      { label: "Documentation", url: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Cookie Policy", url: "#" },
    ],
  },
  pt: {
    Navegação: [
      { label: "Início", url: "/" },
      { label: "Trabalho", url: "/#featured-projects" },
      { label: "Sobre", url: "/#about" },
      { label: "Fale comigo", url: "/#contact" },
    ],
    Recursos: [
      { label: "CV", url: cvFile },
      { label: "Blog", url: "#" },
      { label: "Estudos de caso", url: "#" },
      { label: "Documentação", url: "#" },
    ],
    Legal: [
      { label: "Política de Privacidade", url: "#" },
      { label: "Termos de Serviço", url: "#" },
      { label: "Política de Cookies", url: "#" },
    ],
  },
};

export default footerLinks;
