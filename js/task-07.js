
  const fontSizeControl = document.getElementById("font-size-control");
      const textSpan = document.getElementById("text");

      const initialFontSize = fontSizeControl.value + "px";
      textSpan.style.fontSize = initialFontSize;

      fontSizeControl.addEventListener("input", function () {
        const fontSize = fontSizeControl.value + "px";
        textSpan.style.fontSize = fontSize;
      });