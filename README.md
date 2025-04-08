# 🌸 Floristería E2E Automation Framework (Playwright + JavaScript)

Este proyecto automatiza pruebas funcionales en el sitio web [SanAngel.com.co](https://sanangel.com.co/) usando **Playwright**, aplicando buenas prácticas como **Page Object Model (POM)**, principios **SOLID**, y ejecución en **Google Chrome**.

---

## 🚀 Características del Framework

- JavaScript + Playwright
- Page Object Model (POM)
- Principios SOLID aplicados a POM
- Reportes HTML visuales
- Ejecución en Google Chrome
- Integración con CI/CD (GitHub Actions)

---

-- Estructura del Proyecto

```
floristeria/
├── pages/            # Clases de página POM
├── tests/            # Casos de prueba
├── utils/            # Utilidades generales
├── package.json      # Dependencias
├── playwright.config.js
└── README.md
```

---

---Instalación

```bash
npm install
npx playwright install
```

---

## 🧪 Ejecutar pruebas

```bash
npx playwright test
```

---

--Ver Reportes Visuales

```bash
npx playwright show-report
```

---

-- CI/CD con GitHub Actions

Agrega este flujo de trabajo en `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install
      - run: npx playwright test
      - run: npx playwright show-report
```

---

-- Autora

**Daniela Fabra Valencia**  \
Senior Functional QA Engineer  \
[LinkedIn](https://www.linkedin.com/in/danielafabravalencia) | dafava4085@hotmail.com

---
