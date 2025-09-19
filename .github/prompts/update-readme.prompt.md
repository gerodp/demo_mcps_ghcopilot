---
mode: 'agent'
model: Claude Sonnet 4
description: 'Actualiza el README.md para reflejar los cambios actuales del proyecto'
---

# Comando: Actualizar README.md del Proyecto

## Objetivo

Actualizar completamente el archivo README.md para reflejar la evolución del proyecto desde las configuraciones de Cursor hacia un repositorio completo de demos de MCPs con GitHub Copilot, incluyendo prompts, instrucciones y documentación.

## Análisis de Cambios Requeridos

### 1. Detección de la Estructura Actual

Analiza la estructura actual del repositorio y compárala con lo que describe el README:

```bash
# Obtener la estructura actual del proyecto
find . -type f -name "*.md" -o -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.png" -o -name "*.json" | grep -v ".git" | sort
```

### 2. Identificar Diferencias Clave

**Cambios principales detectados:**
- El proyecto ahora se enfoca en **GitHub Copilot** en lugar de solo Cursor
- Estructura centrada en **prompts** (`.github/prompts/`)
- **Instrucciones** específicas (`.github/instructions/`)
- **Documentación web** en `docs/` en lugar de `web_demo/`
- Archivos de **ejemplos de prompts** en la raíz
- **Guía de instalación** de MCPs

### 3. Secciones a Actualizar

#### 3.1 Título y Descripción Principal
- Cambiar de "Demo MCPs - Cursor Integrations" a "Demo MCPs - GitHub Copilot"
- Actualizar descripción para reflejar el enfoque en GitHub Copilot
- Mantener el enlace a la demo web actualizada

#### 3.2 Estructura del Proyecto
Actualizar completamente la estructura para mostrar:
```
demoMCPs_ghcopilot/
├── 📁 .github/
│   ├── 📁 prompts/           # Prompts para GitHub Copilot
│   │   ├── review.prompt.md      # Revisión de código
│   │   ├── listtickets.prompt.md # Listar tickets Jira
│   │   └── startticket.prompt.md # Comenzar trabajo en ticket
│   └── 📁 instructions/      # Instrucciones específicas
│       ├── jira.instructions.md  # Configuración Jira
│       └── java.instructions.md  # Estándares Java
├── 📁 docs/                  # Documentación web
│   ├── index.html           # Demo interactiva
│   ├── script.js            # Funcionalidad
│   ├── styles.css           # Estilos
│   └── ghc_instruction_screenshot.png
├── 📁 mcp_installation/      # Guías de instalación
│   ├── installation.md      # Pasos de instalación
│   ├── 1_mcp_server_option.png
│   └── 2_select_atlassian_mcp.png
├── 📄 bitbucket_prompt_examples.md  # Ejemplos Bitbucket
├── 📄 jira_prompt_examples.md       # Ejemplos Jira
├── 📄 prompt_files_examples.md      # Ejemplos de creación
└── 📄 README.md
```

#### 3.3 Características Principales
- Actualizar sección de MCPs para enfocarse en GitHub Copilot
- Añadir sección sobre **Prompt Files**
- Actualizar **GitHub Copilot Instructions**
- Mantener información de Jira y Atlassian MCPs

#### 3.4 Nueva Sección: Prompt Files
Añadir sección explicando:
- Qué son los prompt files de GitHub Copilot
- Cómo usar los prompts incluidos
- Ejemplos de prompts para revisión de código, gestión de tickets
- Estructura de prompts con metadatos

#### 3.5 Instalación y Configuración
- Actualizar prerrequisitos (GitHub Copilot en lugar de Cursor)
- Añadir pasos para configurar MCPs con GitHub Copilot
- Incluir guía de instalación de Atlassian MCP

#### 3.6 Ejemplos de Uso
- Actualizar ejemplos para usar prompts de GitHub Copilot
- Añadir ejemplos de uso de los prompts incluidos
- Mostrar cómo usar las instrucciones específicas

#### 3.7 Demo Web
- Actualizar referencia a `docs/` en lugar de `web_demo/`
- Mantener descripción de contenido interactivo

## Instrucciones de Implementación

### 1. Preservar Información Valiosa
- **NO** eliminar información sobre MCPs y sus capacidades
- **MANTENER** ejemplos de JQL y comandos de Jira/Bitbucket
- **CONSERVAR** secciones de casos de uso y contribución

### 2. Actualizar Referencias
- Cambiar todas las referencias de "Cursor" a "GitHub Copilot"
- Actualizar rutas de archivos y carpetas
- Corregir enlaces y referencias cruzadas

### 3. Añadir Nuevas Secciones
- Sección dedicada a **Prompt Files**
- Explicación de **Instructions Files**
- Guía de **Instalación de MCPs**
- **Screenshots** de configuración cuando corresponda

### 4. Mejorar Navegación
- Añadir tabla de contenidos si es necesario
- Usar emojis consistentes
- Mantener formato markdown limpio y legible

### 5. Validar Links y Referencias
- Comprobar que todos los archivos mencionados existen
- Validar rutas y enlaces
- Asegurar consistencia en nombres de archivos

## Resultado Esperado

Un README.md completamente actualizado que:
- ✅ Refleje la estructura actual del proyecto
- ✅ Enfoque en GitHub Copilot y prompts
- ✅ Mantenga información valiosa sobre MCPs
- ✅ Incluya guías de instalación y uso
- ✅ Proporcione ejemplos claros y actualizados
- ✅ Sea navegable y bien estructurado

## Notas Importantes

- **Mantener el mismo tono profesional** del README actual
- **Conservar la estructura de emojis** para mejor legibilidad
- **Incluir referencias** a archivos de ejemplo existentes
- **Validar** que todos los enlaces funcionen correctamente
- **Añadir fecha de actualización** si es apropiado