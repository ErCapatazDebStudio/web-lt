# Guía de Deployment - Lara Tolosa Website

## Estado: ✅ LISTO PARA VERCEL

El repositorio ha sido subido exitosamente a GitHub sin el archivo de vídeo. 

**GitHub Repository:** https://github.com/ErCapatazDebStudio/web-lt

### Pasos de Deployment en Vercel:

#### 1. Autenticación GitHub (ACTUAL)
- Estás en: https://github.com/login/oauth/authorize
- Inicia sesión con tus credenciales de GitHub
- Autoriza Vercel a acceder a tu repositorio

#### 2. Crear Proyecto en Vercel
- Ve a: https://vercel.com/new
- Selecciona **Import Git Repository**
- Busca: `web-lt` (o https://github.com/ErCapatazDebStudio/web-lt)
- Click en **Import**

#### 3. Configuración del Proyecto
- **Framework:** Static HTML
- **Build Command:** (Dejar vacío - ya tiene vercel.json)
- **Output Directory:** `.` (raíz)
- **Environment:** (No requiere)
- Click en **Deploy**

#### 4. Resultado Final
- Tu sitio se desplegará en: `https://web-lt.vercel.app`
- Los videos se sirven desde el sistema de archivos local
- El sitio estará completamente funcional con toda la cinematografía

### Notas Importantes:
- ✅ El vídeo NO está en GitHub (excluido en .gitignore)
- ✅ Vercel servirá los archivos HTML, CSS, JS, imágenes y vídeos desde el repositorio
- ✅ La configuración está en `vercel.json`
- ✅ Todos los enlaces, animaciones y funcionalidades están listas

### En caso de problemas:
Si el vídeo no se ve tras el deploy:
1. Verifica que `assets/Lara Tolosa.mov` existe localmente
2. El archivo DEBE estar en el repositorio (git add, commit, push)
3. La referencia en HTML es: `src="assets/Lara%20Tolosa.mov"`

---
**Último commit:** a7efa0d - Lara Tolosa website - cinematographic design
**Rama:** main
**Estado de GitHub:** Sincronizado ✅
