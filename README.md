# 🛡️ CyberGuard AI - Asistente de Ciberseguridad

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<div align="center">
  <h3>🔐 Interfaz de Chat de Ciberseguridad Avanzada con IA</h3>
  <p>Un asistente de ciberseguridad sofisticado y listo para producción con un diseño de UI/UX de vanguardia inspirado en los modernos centros de operaciones de seguridad.</p>
</div>

---

## 🌟 Características

### 🎨 **Diseño Avanzado de UI/UX**
- **Fondo animado estilo Matrix** con caracteres cayendo
- **Estética cyberpunk** con brillos neón y efectos holográficos
- **Efecto de vidrio** y desvanecimiento de fondo
- **Diseño adaptable** optimizado para todos los dispositivos
- **Tema oscuro** con colores de acento cian/verde
- **Animaciones suaves** y micro-interacciones

### 💬 **Interfaz de Chat**
- **Mensajería en tiempo real** con indicadores de escritura
- **Gestión de múltiples conversaciones**
- **Historial de mensajes** con marcas de tiempo
- **Desplazamiento automático** a los últimos mensajes
- **Atajos de teclado** (Enter para enviar, Shift+Enter para nueva línea)

### 🛡️ **Tema de Ciberseguridad**
- **Branding y simbología enfocados en seguridad**
- **Simulación de análisis de amenazas**
- **Indicadores de conexión encriptada**
- **Sección de herramientas de seguridad** (Próximamente)
- **Persona de asistente de seguridad profesional**

### 🔧 **Características Técnicas**
- **TypeScript** para seguridad de tipos
- **Arquitectura basada en componentes**
- **Hooks personalizados** para gestión de estado
- **Rendimiento optimizado** con las mejores prácticas de React
- **Diseño accesible** con etiquetas ARIA adecuadas

---

## 🚀 Inicio Rápido

### Prerrequisitos
- **Node.js** (v18 o superior)
- **npm** o **yarn**
- **Git**

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/yourusername/cyberguard-ai.git
   cd cyberguard-ai
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir tu navegador**
   ```
   http://localhost:5173
   ```

---

## 📁 Estructura del Proyecto

```
cyberguard-ai/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🔹 ChatInterface.tsx      # Contenedor principal del chat
│   │   ├── 🔹 ChatHeader.tsx         # Encabezado con branding
│   │   ├── 🔹 Sidebar.tsx            # Barra lateral de navegación
│   │   ├── 🔹 MessageList.tsx        # Contenedor de mensajes
│   │   ├── 🔹 MessageItem.tsx        # Mensaje individual
│   │   ├── 🔹 MessageInput.tsx       # Campo de entrada
│   │   ├── 🔹 TypingIndicator.tsx    # Animación de escritura
│   │   └── 🔹 MatrixBackground.tsx   # Fondo animado
│   ├── 📁 types/
│   │   └── 🔹 chat.ts                # Interfaces de TypeScript
│   ├── 🔹 App.tsx                    # Componente raíz
│   ├── 🔹 main.tsx                   # Punto de entrada
│   └── 🔹 index.css                  # Estilos globales
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.ts
└── 📄 README.md
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
/* Colores Primarios */
--cyber-green: #00ff41    /* Verde Matrix */
--cyber-blue: #00d4ff     /* Azul neón */
--cyber-purple: #b847ff   /* Morado de acento */

/* Colores de Fondo */
--bg-primary: #0a0a0a     /* Negro profundo */
--bg-secondary: #1a1a1a   /* Gris oscuro */
--bg-glass: rgba(255, 255, 255, 0.05)  /* Efecto de vidrio */
```

### Tipografía
- **Fuente Principal**: Inter (Limpia, moderna)
- **Fuente Monospace**: JetBrains Mono (Estilo de código/terminal)
- **Pesos de Fuente**: 300, 400, 500, 600, 700

### Componentes
- **Tarjetas de efecto de vidrio** con desenfoque de fondo
- **Bordes y fondos degradados**
- **Efectos de brillo neón** en elementos interactivos
- **Transiciones suaves** (duración de 300ms)

---

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar construcción de producción
npm run lint         # Ejecutar ESLint

# Calidad del Código
npm run type-check   # Verificación de tipos de TypeScript
npm run format       # Formatear código con Prettier
```

### Guías de Desarrollo

1. **Estructura de Componentes**
   - Usar componentes funcionales con hooks
   - Implementar interfaces de TypeScript
   - Seguir el principio de responsabilidad única

2. **Estilo**
   - Usar clases de utilidad de Tailwind CSS
   - CSS personalizado para animaciones complejas
   - Mantener un espaciado consistente (cuadrícula de 8px)

3. **Gestión de Estado**
   - Estado local con useState
   - Estado complejo con useReducer
   - Contexto para estado global (si es necesario)

---

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` en el directorio raíz:

```env
# Desarrollo
VITE_APP_TITLE=CyberGuard AI
VITE_APP_VERSION=1.0.0

# Configuración de API (cuando se implemente)
VITE_API_URL=http://localhost:3001
VITE_API_KEY=your-api-key-here
```

### Configuración de Tailwind
El proyecto utiliza una configuración personalizada de Tailwind con:
- Paleta de colores extendida
- Animaciones personalizadas
- Puntos de interrupción adaptables
- Escala tipográfica

---

## 🚀 Despliegue

### Construir para Producción
```bash
npm run build
```

### Desplegar en Netlify
1. Conecta tu repositorio de GitHub a Netlify
2. Establece el comando de construcción: `npm run build`
3. Establece el directorio de publicación: `dist`
4. Despliega automáticamente al hacer push a la rama principal

### Desplegar en Vercel
```bash
npm install -g vercel
vercel --prod
```

---

## 🔮 Hoja de Ruta

### Fase 1: Características Principales ✅
- [x] Interfaz de chat
- [x] Gestión de mensajes
- [x] Diseño adaptable
- [x] Tema de ciberseguridad

### Fase 2: Integración de IA 🚧
- [ ] Integración de modelo de IA real
- [ ] Respuestas contextuales
- [ ] Memoria de conversación
- [ ] Exportar conversaciones

### Fase 3: Herramientas de Seguridad 📋
- [ ] Escáner de vulnerabilidades
- [ ] Análisis de amenazas
- [ ] Evaluación de riesgos
- [ ] Recomendaciones de seguridad

### Fase 4: Características Avanzadas 🔮
- [ ] Entrada/salida de voz
- [ ] Análisis de carga de archivos
- [ ] Soporte multilingüe
- [ ] Colaboración en equipo

---

## 🤝 Contribución

¡Aceptamos contribuciones! Por favor, sigue estos pasos:

1. **Haz un fork del repositorio**
2. **Crea una rama de características**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Confirma tus cambios**
   ```bash
   git commit -m 'Añadir característica increíble'
   ```
4. **Haz push a la rama**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Abre un Pull Request**

### Guías de Contribución
- Sigue el estilo de código existente
- Añade tipos de TypeScript para nuevas características
- Actualiza la documentación según sea necesario
- Prueba tus cambios exhaustivamente

---

## 👥 Autores

- Andres Felipe Celi Jimenez (Mi persona)

---

## 🙏 Agradecimientos

- **Equipo de React** por el increíble framework
- **Tailwind CSS** por el framework CSS utilitario
- **Lucide React** por los iconos hermosos
- **Vite** por la herramienta de construcción ultrarrápida

---

<div align="center">
  <p>Hecho con ❤️ y ☕ para la comunidad de ciberseguridad</p>
  <p>
    <a href="#top">⬆️ Volver al Inicio</a>
  </p>
</div>
