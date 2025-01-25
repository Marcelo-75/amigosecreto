# Amigo Secreto 🎉

Este proyecto consiste en una aplicación web interactiva para sortear un "amigo secreto" de manera divertida. Los usuarios pueden agregar nombres de amigos, y la aplicación seleccionará aleatoriamente un ganador. 

## 🚀 Funcionalidades
### Página principal
1. **Agregar nombres**: Permite a los usuarios agregar nombres de amigos a una lista dinámica.
2. **Sortear amigo**: Selecciona aleatoriamente un amigo de la lista y muestra quién ha sido sorteado.
3. **Reiniciar**: Limpia la lista y vuelve a la configuración inicial.

### Animaciones
- Al eliminar a los amigos de la lista durante el sorteo, los nombres desaparecen con una animación de desvanecimiento.

---

## 📂 Estructura de Archivos
### HTML
- **Encabezado**: Contiene un título "Amigo Secreto" y dos imágenes decorativas.
- **Formulario**: Campo de texto e input para agregar nombres.
- **Botones**:
  - **Agregar**: Agrega un nuevo nombre a la lista.
  - **Sortear amigo**: Realiza el sorteo o reinicia la aplicación.
- **Lista dinámica**: Muestra los nombres agregados.

### CSS
Estilos que hacen que la página sea visualmente atractiva:
1. **Diseño Responsivo**: Elementos ajustados para diversos tamaños de pantalla.
2. **Colores vibrantes**: Uso de tonos como `royalblue`, `blueviolet`, y `rgb(243, 129, 23)`.
3. **Animaciones**: Clase `fade-out` para un desvanecimiento suave al eliminar nombres.

### JavaScript
Lógica que controla las funcionalidades principales de la aplicación:
1. **`agregarAmigo`**:
   - Valida que el campo no esté vacío.
   - Agrega el nombre ingresado a la lista dinámica.
   - Crea y muestra un nuevo elemento `<p>` con el nombre agregado.
2. **`sortearAmigo`**:
   - Gestiona el sorteo y eliminación de nombres.
   - Aplica animación de desvanecimiento a los nombres eliminados.
   - Cambia la interfaz según el estado (sorteo o reinicio).

---

## 📜 Descripción del Código
### Variables JavaScript
- **`listaAmigos`**: Almacena los nombres ingresados.
- **`nuevo_amigo_p`**: Representa el nuevo elemento `<p>` que contiene el nombre del amigo.
- **`btn_sortear`**: Controla el botón de sorteo/reinicio.

### Detalles CSS
- **Clases principales**:
  - `.fade-out`: Anima los elementos eliminados con una transición suave.
  - `.content__amigos-lista`: Estilo para los elementos `<p>` de la lista.
  - `.header-div`: Contenedor del encabezado.
  - `.content`: Diseño principal del cuerpo de la página.

---

## 🛠️ Cómo usar
1. Abre el archivo `index.html` en tu navegador.
2. Ingresa nombres en el campo de texto y haz clic en "AGREGAR".
3. Cuando hayas ingresado varios nombres, haz clic en "SORTEAR AMIGO".
4. Observa cómo los nombres son eliminados hasta quedar solo uno, que será el amigo sorteado.
5. Haz clic en "REINICIAR" para volver al estado inicial.

---

## 📋 Requerimientos
- Navegador web moderno con soporte para JavaScript y CSS.
- Estructura de archivos:
  - **HTML**: `index.html`
  - **CSS**: `assets/css/styles.css`
  - **JavaScript**: `assets/js/apps.js`
  - **Imágenes**: `assets/images/chico.png`, `assets/images/chica.png`

---

## 🌟 Créditos - Luis Enrique Mottoo ©️ 2025
Creado con HTML, CSS y JavaScript para una experiencia interactiva y atractiva. ¡Disfruta sorteando a tus amigos! 🎁
