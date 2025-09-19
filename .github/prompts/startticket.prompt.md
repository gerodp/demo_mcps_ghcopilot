---
mode: agent
model: Claude Sonnet 4
tools: ['atlassian']
description: 'Prepara el ticket de jira para ser comenzado'
---


# Comando: Prepara un ticket de jira para ser comenzado

## Objetivo
Prepara un ticket de jira para ser comenzado, actualizando su estado a "In Progress", asignándolo al usuario actual, y añadiendo un comentario que indique que el trabajo ha comenzado.

## Instrucciones

Si el usuario no ha especificado un ticket, pregunta por el ID del ticket.

1. Verifica que el ticket existe.
2. Cambia el estado del ticket a "In Progress".
3. Asigna el ticket al usuario actual.
4. Añade un comentario al ticket que diga: "El trabajo en este ticket ha comenzado."
5. Imprime la url del ticket.