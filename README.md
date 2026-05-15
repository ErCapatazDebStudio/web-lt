# 🎬 LARA TOLOSA - Web Cinematográfica

## "Si lo ves, actúa… No te calles."

---

## 📋 ESTRUCTURA DEL PROYECTO

```
/lara-tolosa
├── index.html          # Página principal (ONE PAGE)
├── style.css           # Estilos cinematográficos
├── script.js           # Interactividad y animaciones
├── README.md           # Este archivo
└── /assets
    ├── logo.png        # Logo (ya existe ✓)
    ├── trailer.mp4     # Vídeo principal convertido
    └── /cast           # Fotos de actores
        ├── lucia.jpg       # Lucía Cosano
        ├── francis.jpg     # Francis Cobo
        ├── daniel.jpg      # Daniel Parrilla
        └── jesus.jpg       # Jesús Morales
```

---

## 🚀 INSTRUCCIONES PARA COMPLETAR

### 1️⃣ CONVERTIR VÍDEO

Tu archivo `.mov` necesita convertirse a `.mp4` para mejor compatibilidad:

**Opción A - Online (gratis, sin instalar)**
- Entra en: https://cloudconvert.com/mov-to-mp4
- Sube tu archivo `.mov`
- Descarga como `.mp4`
- Guarda como: `assets/trailer.mp4`

**Opción B - FFmpeg (línea de comandos)**
```bash
ffmpeg -i assets/trailer.mov -codec:v libx264 -codec:a aac assets/trailer.mp4
```

---

### 2️⃣ AGREGAR FOTOS DEL REPARTO

Guarda las fotos en estas carpetas exactas:

```
assets/cast/
├── lucia.jpg    (Lucía Cosano - Protagonista)
├── francis.jpg  (Francis Cobo - Voz Off Principal)
├── daniel.jpg   (Daniel Parrilla - Voz Off Secundaria)
└── jesus.jpg    (Jesús Morales - Voz Off Terciaria)
```

**Recomendaciones:**
- Tamaño: 300x400px mínimo
- Formato: JPG o PNG
- Fondo: preferentemente oscuro (encaja con el diseño)
- Si no tienes fotos, la web mostrará placeholders automáticamente

---

### 3️⃣ EDITAR CONTENIDO DEL FOOTER

Abre `index.html` y actualiza el footer con los nombres reales del equipo:

```html
<li>Dirección: [Tu nombre]</li>
<li>Producción: [Tu nombre]</li>
<li>Fotografía: [Tu nombre]</li>
<li>Sonido: [Tu nombre]</li>
```

---

### 4️⃣ AGREGAR REDES SOCIALES

En el mismo footer, reemplaza los `#` con tus URLs reales:

```html
<a href="https://instagram.com/tuusuario" title="Instagram">📸</a>
<a href="https://twitter.com/tuusuario" title="Twitter">𝕏</a>
<a href="https://tiktok.com/@tuusuario" title="TikTok">♪</a>
<a href="https://youtube.com/@tucanal" title="YouTube">▶</a>
```

---

### 5️⃣ PERSONALIZAR CONTENIDO (OPCIONAL)

Si quieres cambiar textos, puedes editar estas secciones en `index.html`:

- **Sinopsis** → Línea ~95
- **Inspiración** → Línea ~105
- **Recursos de Ayuda** → Línea ~200
- **Créditos** → Línea ~260

---

## 🎨 CARACTERÍSTICAS IMPLEMENTADAS

✅ **Diseño ONE PAGE** - Todo en una sola página  
✅ **Menú Netflix** - Navbar transparente y elegante  
✅ **Hero cinematográfico** - Vídeo de fondo + animaciones  
✅ **Modal de vídeo** - Abre en pantalla grande al hacer clic  
✅ **Cards tipo Netflix** - Reparto con hover effect  
✅ **Animaciones scroll** - AOS.js integrado  
✅ **Responsive** - Funciona en móviles, tablets y desktop  
✅ **Modo oscuro** - Diseño cinematográfico oscuro  
✅ **Sección prevención** - Recursos de ayuda e información  
✅ **Colores: Negro, Azul, Rojo** - Paleta cinematográfica

---

## 🔧 TECNOLOGÍAS UTILIZADAS

- **HTML5** - Semántica moderna
- **CSS3** - Grid, Flexbox, Gradientes, Animaciones
- **JavaScript** - Interactividad sin frameworks
- **AOS.js** - Animaciones al hacer scroll
- **Google Fonts** - Bebas Neue y Poppins

---

## 📱 RESPONSIVE

La web se adapta automáticamente a:
- 🖥️ Desktop (1920px+)
- 📱 Tablet (768px - 1024px)
- 📱 Móvil (320px - 767px)

---

## 🚀 DESPLEGAR EN VERCEL

### Opción 1: Desde GitHub (Recomendado)

1. Crea un repositorio en GitHub
2. Sube tu código
3. Entra en https://vercel.com
4. Haz clic en "Import Project"
5. Selecciona tu repositorio
6. ¡Listo! Tu web estará en vivo en segundos

### Opción 2: Drag & Drop

1. Entra en https://vercel.com/import
2. Sube la carpeta del proyecto
3. Espera a que se compile
4. ¡Listo!

---

## 🎯 PUNTOS CLAVE PARA RECORDAR

1. **Video obligatorio** - Sin `.mp4` en `assets/trailer.mp4`, el vídeo de fondo no funcionará
2. **Logo importante** - Ya tienes `assets/logo.png`, asegúrate de que esté en esa ruta exacta
3. **Fotos del reparto** - Guardalas en `assets/cast/` con los nombres exactos
4. **URLs redes sociales** - Actualiza los enlaces en el footer
5. **Contenido** - Edita sinopsis e inspiración según necesites

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Por qué no aparece el vídeo de fondo?**  
R: Asegúrate de que el archivo esté en `assets/trailer.mp4` y sea un `.mp4` válido

**P: ¿Las fotos del reparto aparecen pixeladas?**  
R: Aumenta la resolución a mínimo 300x400px

**P: ¿Cómo cambio el color del diseño?**  
R: En `style.css`, línea 1-6, edita estas variables:
```css
--blue: #0f4c81;
--red: #b30000;
```

**P: ¿El modal no abre?**  
R: Asegúrate de que `script.js` esté cargando correctamente (F12 → Consola)

**P: ¿Puedo agregar más secciones?**  
R: Sí, copia una sección existente y personaliza. Mantén la estructura HTML para que funcionen las animaciones.

---

## 📞 RECURSOS DE AYUDA (INCLUIDOS EN LA WEB)

- **Teléfono de la Esperanza:** 024
- **Cibercorresponsables:** www.cibercorresponsables.com
- **Pantallas Amigas:** www.pantallasamigas.net
- **Policía Cibernética:** sos@policia.es

---

## 📝 NOTAS FINALES

- La web está **100% lista** para funcionar
- Solo necesitas agregar: vídeo MP4, fotos del reparto, y tus datos
- El diseño es **completamente responsive**
- Las **animaciones funcionan sin plugins externos** (excepto AOS.js)
- Todo está **optimizado para Vercel**

---

## 🎥 ¡RECUERDA!

**"Si lo ves, actúa… No te calles."**

Esta web es una herramienta poderosa para concienciar sobre el ciberacoso. Úsala para generar impacto social.

---

**¡La web está lista! 🚀**

Cualquier duda, avísame.
