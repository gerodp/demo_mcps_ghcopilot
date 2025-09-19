---
mode: 'agent'
model: Claude Sonnet 4
tools: ['atlassian']
description: 'Listar tickets de Jira utilizando el MCP'
---

# Comando: Lista mis tickets de jira

## Objetivo
Listar los tickets del usuario actual ${input:jiraUser} (en los que aparezca como assignee, si no aparece como assignee no los incluyas aunque sea el reporter  ) del proyecto de jira actual. Muestra los tickets en una tabla con el siguiente formato

Ticket number (con link a jira) | Title | Status | Reporte | Descripción (200 primeros caracteres)

Se conciso, no me cuentes nada más que la tabla.

Responde siempre en español, pero respeta el texto de los tickets si está en otro idioma.
