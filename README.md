# 🚀 Demo MCPs - GitHub Copilot Integrations

Demostración práctica de las capacidades de integración de GitHub Copilot MCPs, además de la customización de la IA a través de Copilot instructions y la automatización de prompts recurrentes a través de Prompt Files .

🌐 **[Demo Web](https://gerodp.github.io/demo_mcps_ghcopilot/)** 

## 📋 Descripción

Este proyecto demuestra cómo integrar GitHub Copilot con servicios externos como Jira y Atlassian utilizando MCPs, incluyendo prompt files personalizados, instrucciones específicas y comandos automatizados. Incluye tanto ejemplos prácticos como una presentación web interactiva sobre las capacidades de GitHub Copilot con MCPs.

## 🏗️ Estructura del Proyecto

```
demoMCPs_ghcopilot/
├── 📁 .github/                    # Configuraciones de GitHub Copilot
│   ├── 📁 prompts/                # Prompt files personalizados
│   │   ├── review.prompt.md           # Revisión de código
│   │   ├── listtickets.prompt.md      # Listar tickets Jira  
│   │   ├── startticket.prompt.md      # Comenzar trabajo en ticket
│   │   └── update-readme.prompt.md    # Actualizar documentación
│   └── 📁 instructions/           # Instrucciones específicas
│       ├── jira.instructions.md       # Configuración de Jira
│       └── java.instructions.md       # Estándares Java
├── 📁 docs/                       # Demo web interactiva
│   ├── index.html                     # Presentación sobre MCPs
│   ├── script.js                      # Lógica de navegación
│   ├── styles.css                     # Estilos modernos
│   └── ghc_instruction_screenshot.png # Captura de instrucciones
├── 📁 mcp_installation/           # Guías de instalación
│   ├── installation.md               # Pasos de instalación MCP
│   ├── 1_mcp_server_option.png       # Captura configuración
│   └── 2_select_atlassian_mcp.png    # Captura selección MCP
├── 📄 jira_mcp_prompt_examples.md    # Ejemplos de prompts Jira
├── 📄 prompt_files_examples.md       # Ejemplos de creación de prompts
└── 📄 README.md                      # Este archivo
```

## 🛠️ Características Principales

### � GitHub Copilot Prompt Files

Este repositorio incluye prompt files personalizados para automatizar tareas comunes:

- **📋 review.prompt.md**: Revisión completa de código con análisis de cambios, detección de problemas y sugerencias de mejora
- **🎫 listtickets.prompt.md**: Listar y gestionar tickets de Jira con formato de tabla
- **🚀 startticket.prompt.md**: Comenzar trabajo en un ticket específico con análisis de contexto
- **📖 update-readme.prompt.md**: Actualizar documentación para reflejar cambios del proyecto

### 📏 GitHub Copilot Instructions

El proyecto incluye instrucciones específicas que configuran el comportamiento de GitHub Copilot:

- **Jira Instructions** (`.github/instructions/jira.instructions.md`): Configuración del proyecto CPG y formato de resultados
- **Java Instructions** (`.github/instructions/java.instructions.md`): Estándares de codificación para backend Java
- **Aplicación automática**: Las instrucciones se aplican según patrones de archivos definidos

### 🔗 Integraciones MCPs

#### Atlassian MCP (Jira)
- **Operaciones soportadas**:
  - ✅ Crear, editar y transicionar tickets
  - ✅ Buscar issues con JQL y Rovo Search
  - ✅ Gestionar comentarios y subtasks
  - ✅ Administrar proyectos y sprints
  - ✅ Gestión completa de Confluence

#### Capacidades Confluence
- **Operaciones soportadas**:
  - ✅ Crear y editar páginas
  - ✅ Gestionar comentarios inline y footer
  - ✅ Buscar contenido con CQL
  - ✅ Administrar espacios y jerarquías

## 🌐 Demo Web Interactiva

La carpeta `docs/` contiene una presentación web moderna que explica:

1. **¿Qué son los MCPs?** - Introducción a Model Context Protocols
2. **GitHub Copilot + MCPs** - Integración y configuración
3. **Herramientas de Atlassian** - 50+ funciones de Jira y Confluence
4. **Prompt Files** - Automatización de tareas con prompts personalizados
5. **Instructions** - Configuración del comportamiento de IA

## 🚀 Comenzar

### Prerrequisitos

1. **GitHub Copilot** habilitado en tu editor (VS Code, Cursor, etc.)
2. **Acceso a Jira/Confluence** (Atlassian Cloud)
3. **MCPs configurados** - Ver [Guía de Instalación](mcp_installation/installation.md)
4. **Node.js** (opcional, para demo web local)

### Instalación de MCPs

Sigue los pasos detallados en [`mcp_installation/installation.md`](mcp_installation/installation.md):

1. **Configurar MCP Server** en tu editor
2. **Seleccionar Atlassian MCP** del catálogo
3. **Configurar credenciales** de Atlassian
4. **Verificar conexión** con comandos de prueba

### Instalación del Proyecto

1. Clona este repositorio:
```bash
git clone https://github.com/gerodp/demo_mcps_ghcopilot.git
cd demo_mcps_ghcopilot
```

2. Abre el proyecto en tu editor con GitHub Copilot

3. Los prompt files e instructions se cargarán automáticamente

## 📚 Ejemplos de Uso

### Usando Prompt Files

```
# Revisar código actual
Escribir el comando /review en el chat de Copilot

# Listar tickets de Jira
Escribir el comando /listtickets en el chat de Copilot

# Comenzar trabajo en ticket específico
Escribir el comando /startticket COD_TICKET_JIRA en el chat de Copilot

# Actualizar documentación
Escribir el comando /update-readme COD_TICKET_JIRA en el chat de Copilot
```

### Gestión de Jira con MCPs
```
# Buscar tickets del proyecto CPG
"Busca tickets del proyecto CPG que estén en estado 'En curso'"

# Crear nuevos tickets
"Crea un ticket en el proyecto CPG con título 'Implementar nueva funcionalidad' 
y descripción 'Desarrollar la función X según especificaciones'"

# Gestionar estados y asignaciones
"Asígname el ticket CPG-26 y ponlo en estado 'En Curso'"

# Gestionar comentarios
"Añade un comentario al ticket CPG-26 con el progreso actual del desarrollo"
```


## 🎯 Casos de Uso

### Para Desarrolladores
- **Automatización con prompts**: Revisión de código y gestión de tickets automatizada
- **Gestión de proyectos**: Sincronización entre código y herramientas Atlassian
- **Documentación inteligente**: Actualización automática de documentación

### Para Teams
- **Estándares consistentes**: Instructions que aseguran calidad en el código
- **Procesos automatizados**: Menos trabajo manual con prompts reutilizables
- **Mejor colaboración**: Integración fluida entre GitHub Copilot y Atlassian

## 🔧 Configuración Avanzada

### Personalizar Prompt Files

Crea nuevos prompts en `.github/prompts/` siguiendo la estructura:

```markdown
---
mode: 'agent'
model: Claude Sonnet 4
description: 'Descripción del prompt'
---

# Comando: Título del Prompt

## Objetivo
Descripción clara del objetivo

## Instrucciones
1. Paso específico 1
2. Paso específico 2
3. Resultado esperado
```

### Personalizar Instructions

Edita archivos en `.github/instructions/` para configurar comportamiento:

```markdown
---
applyTo: "backend/**"
---

Estas son las instrucciones para el backend:
- Usar Spring Boot
- Seguir patrones REST
- Documentar con JavaDoc
```
