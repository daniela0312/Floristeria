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
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v4
      if: ${{ !cancelled() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

---

-- Autora

**Daniela Fabra Valencia**  \
Senior Functional QA Engineer  \
[LinkedIn](https://www.linkedin.com/in/danielafabravalencia) | dafava4085@hotmail.com

---
