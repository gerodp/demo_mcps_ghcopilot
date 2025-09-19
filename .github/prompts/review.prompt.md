---
mode: 'agent'
model: Claude Sonnet 4
description: 'Realiza una revisión de código siguiendo las buenas prácticas definidas'
---

# Comando: Revisa el código y sugiere mejoras

## Objetivo

Detectar posibles problemas en el código, sugerir mejoras y asegurar que sigue las buenas prácticas definidas en el proyecto.

## Instrucciones

### 1. Detección de Cambios

Ejecuta el siguiente comando para identificar todos los cambios de manera completa:

```bash
# Resumen completo de todos los cambios
echo "=== CAMBIOS COMITEADOS ===" && git diff --name-status origin/main..HEAD && \
echo -e "\n=== CAMBIOS STAGED ===" && git diff --cached --name-status && \
echo -e "\n=== CAMBIOS NOT STAGED ===" && git diff --name-status && \
echo -e "\n=== ARCHIVOS UNTRACKED ===" && git ls-files --others --exclude-standard
```

**Análisis requerido:**
- Lista los archivos modificados, creados y eliminados
- Para cada archivo modificado, identifica las líneas específicas que han cambiado
- Distingue entre cambios ya comiteados, staged y working directory
- Incluye archivos nuevos no trackeados si son relevantes

### 2. Análisis de Código

#### 2.1 Buenas Prácticas
- **Nomenclatura**: Verifica que variables, funciones, clases y métodos sigan convenciones de nomenclatura consistentes
- **Legibilidad**: Evalúa si el código es claro y autodocumentado
- **Principios SOLID**: Revisa adherencia a principios de diseño
- **DRY (Don't Repeat Yourself)**: Identifica código duplicado o redundante
- **Complejidad**: Detecta funciones/métodos excesivamente largos o complejos

#### 2.2 Control de Errores
- Verifica que exista manejo adecuado de excepciones
- Confirma que los errores se propaguen correctamente
- Evalúa si los mensajes de error son informativos
- Revisa validación de inputs y parámetros
- Comprueba el manejo de casos edge y estados inesperados

#### 2.3 Seguridad
- **Inyección**: Revisa vulnerabilidades de SQL injection, XSS, etc.
- **Autenticación/Autorización**: Verifica controles de acceso apropiados
- **Datos sensibles**: Confirma que no se expongan secretos, tokens o credenciales
- **Validación de entrada**: Asegura sanitización adecuada de datos de usuario
- **Criptografía**: Evalúa uso correcto de algoritmos criptográficos

#### 2.4 Testing
- Verifica si se han añadido tests para el nuevo código
- Evalúa la calidad y cobertura de los tests existentes
- Confirma que los tests modificados siguen funcionando correctamente
- Revisa que los tests cubran casos edge y escenarios de error
- Valida que los tests sean mantenibles y no frágiles

#### 2.5 Rendimiento
- Identifica posibles cuellos de botella
- Revisa uso eficiente de recursos (memoria, CPU, I/O)
- Evalúa consultas de base de datos y operaciones costosas
- Verifica patrones que puedan causar memory leaks

#### 2.6 Mantenibilidad
- Evalúa la documentación del código (comentarios, README, etc.)
- Verifica que las dependencias estén actualizadas y sean necesarias
- Revisa la estructura y organización del código
- Confirma que el código sea fácil de extender y modificar

### 3. Instrucciones Específicas del Proyecto
- Revisa que se sigan las instrucciones definidas en `.github/instructions/`
- Verifica cumplimiento con estándares específicos del proyecto
- Confirma que se respeten las convenciones establecidas en el equipo

### 4. Formato de Respuesta

#### Resumen Ejecutivo
- Breve descripción de los cambios principales
- Nivel de riesgo general (Bajo/Medio/Alto)
- Recomendación general (Aprobar/Aprobar con cambios/Rechazar)

#### Análisis Detallado por Archivo
Para cada archivo modificado:
```markdown
## 📄 `nombre_del_archivo`
**Tipo de cambio**: [Nuevo/Modificado/Eliminado]
**Líneas afectadas**: X-Y

### ✅ Aspectos Positivos
- Lista de buenas prácticas implementadas

### ⚠️ Problemas Identificados
- **Severidad Alta**: Problemas críticos de seguridad o funcionalidad
- **Severidad Media**: Problemas de rendimiento o mantenibilidad
- **Severidad Baja**: Mejoras menores de código

### 🔧 Sugerencias de Mejora
- Recomendaciones específicas con ejemplos de código cuando sea aplicable
```

#### Tests y Cobertura
- Estado de los tests existentes
- Tests faltantes identificados
- Recomendaciones para mejorar cobertura

#### Checklist de Revisión
- [ ] Sin problemas de seguridad críticos
- [ ] Control de errores adecuado
- [ ] Tests apropiados incluidos
- [ ] Documentación actualizada
- [ ] Rendimiento aceptable
- [ ] Cumple estándares del proyecto

### 5. Casos Especiales
- Si no hay cambios respecto a main, indica "No hay cambios para revisar"
- Si los cambios son solo en documentación, enfócate en claridad y precisión
- Para cambios en configuración, verifica impacto en seguridad y funcionamiento

