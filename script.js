// ===== Traducción ES/EN + año =====
const I18N = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Skills",
    nav_projects: "Proyectos",
    nav_cv: "CV",
    nav_certs: "Certificaciones",
    nav_contact: "Contacto",
    cta_contact: "Contactar",

    hero_subtitle: "Data Analyst | SQL | Power BI · Analista de Datos Junior | Python | Visualización",
    badge_remote: "Remoto preferente",
    badge_disability: "Certificado de discapacidad (37%). Busco entorno remoto/híbrido.",
    hero_summary:
      "Analista de datos junior orientado a convertir datos en decisiones: reporting, ETL, análisis y dashboards. Trabajo con SQL, Python y Power BI, cuidando claridad, negocio y reproducibilidad.",

    cta_projects: "Ver proyectos",
    cta_cv: "Descargar CV",

    panel_title: "Lo que aporto",
    panel_b1: "Dashboards en Power BI orientados a KPIs y decisiones",
    panel_b2: "ETL y limpieza de datos con Python/Jupyter",
    panel_b3: "Consultas SQL para insights, calidad y reporting",
    panel_b4: "Documentación clara: README, pasos reproducibles y conclusiones",
    panel_footer: "Sectores objetivo: Retail/E-commerce · Finanzas · Logística",

    about_title: "Sobre mí",
    about_sub: "Perfil claro, orientado a negocio y a resultados.",
    about_h: "Resumen",
    about_p:
      "Soy Alejandro Cantero, Data Analyst Junior con foco en transformar datos en información accionable. Me gusta construir pipelines sencillos (ETL), analizar con SQL/Python y comunicar insights con dashboards en Power BI. Busco un entorno remoto o híbrido donde aportar rigor, claridad y mejora continua.",

    edu_h: "Formación",
    skills_title: "Skills",
    skills_sub: "Stack principal (nivel intermedio, en crecimiento).",

    projects_title: "Proyectos",
    projects_sub: "Pon aquí tus 3 proyectos y sus enlaces.",

    cv_title: "CV",
    cv_sub: "Descarga tu CV en PDF.",
    certs_title: "Certificaciones",
    certs_sub: "En progreso",
    contact_title: "Contacto",
    contact_sub: "Escríbeme por email.",
    talk: "Hablemos",
    contact_p: "Remoto/híbrido. Retail · Finanzas · Logística."
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_cv: "Resume",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    cta_contact: "Contact",

    hero_subtitle: "Data Analyst | SQL | Power BI · Junior Data Analyst | Python | Visualization",
    badge_remote: "Remote-first",
    badge_disability: "Disability certificate (37%). Looking for a remote/hybrid environment.",
    hero_summary:
      "Junior data analyst focused on turning data into decisions: reporting, ETL, analysis and dashboards. I work with SQL, Python and Power BI, prioritizing clarity, business impact and reproducibility.",

    cta_projects: "View projects",
    cta_cv: "Download resume",

    panel_title: "What I deliver",
    panel_b1: "Power BI dashboards built around KPIs and decision-making",
    panel_b2: "ETL and data cleaning with Python/Jupyter",
    panel_b3: "SQL queries for insights, quality checks and reporting",
    panel_b4: "Clear documentation: README, reproducible steps and takeaways",
    panel_footer: "Target industries: Retail/E-commerce · Finance · Logistics",

    about_title: "About",
    about_sub: "Clear profile focused on business outcomes.",
    about_h: "Summary",
    about_p:
      "I’m Alejandro Cantero, a Junior Data Analyst focused on turning data into actionable insight. I build simple pipelines (ETL), analyze with SQL/Python and communicate findings with Power BI dashboards. I’m looking for a remote or hybrid environment to contribute rigor, clarity and continuous improvement.",

    edu_h: "Education",
    skills_title: "Skills",
    skills_sub: "Core stack (mid level, growing).",

    projects_title: "Projects",
    projects_sub: "Add your 3 projects and their links here.",

    cv_title: "Resume",
    cv_sub: "Download my resume as PDF.",
    certs_title: "Certifications",
    certs_sub: "In progress",
    contact_title: "Contact",
    contact_sub: "Email me.",
    talk: "Let’s talk",
    contact_p: "Remote/hybrid. Retail · Finance · Logistics."
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = I18N[lang]?.[key];
    if (value) el.textContent = value;
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Año
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Idioma guardado
  const saved = localStorage.getItem("lang") || "es";
  setLang(saved);

  // Botón
  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.lang || "es";
      setLang(current === "es" ? "en" : "es");
    });
  }
});
