import cvFile from "../assets/CV/CV.pdf";

const footerLinks = {
  en: {
    Navigation: [
      { label: "Home", url: "/" },
      { label: "Work", url: "/#featured-projects" },
      { label: "Capabilities", url: "/#skills" },
      { label: "Contact", url: "/#contact" },
    ],
    Resources: [
      { label: "CV", url: cvFile },
      { label: "Case Studies", url: "/projects" },
      { label: "Availability", url: "/#contact" },
      { label: "Process Notes", url: "#" },
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
      { label: "Projetos", url: "/#featured-projects" },
      { label: "Competências", url: "/#skills" },
      { label: "Contacto", url: "/#contact" },
    ],
    Recursos: [
      { label: "CV", url: cvFile },
      { label: "Casos de estudo", url: "/projects" },
      { label: "Disponibilidade", url: "/#contact" },
      { label: "Notas de processo", url: "#" },
    ],
    Legal: [
      { label: "Politica de Privacidade", url: "#" },
      { label: "Termos de Servico", url: "#" },
      { label: "Politica de Cookies", url: "#" },
    ],
  },
};

export default footerLinks;
