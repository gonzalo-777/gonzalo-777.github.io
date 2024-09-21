// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "georgia", time: 8.05},
  { text: "wrap me up in all your", time: 8,7 },
  { text: "I want you", time: 13.3 },
  { text: "in my arms Oh, let me", time: 17.6 },
  { text: "hold you", time: 18.1 },
  { text: "I'll never let you go again", time: 25 },
  { text: "like I did", time: 27 },
  { text: "Oh, I used to say:", time: 29 },
  { text: "I would never fall in love again until I found her", time: 36.4 },
  { text: "I said, I would never fall unless its you I fall into", time: 39.9 },
  { text: "I was lost within the darkness, but then I found her", time: 51 },
  { text: "I found you", time: 58 },
  { text: "Heaven", time: 66 },
  { text: "When I held you again", time: 70 },
  { text: "How we could", time: 74 },
  { text: "We ever just be friends?", time: 77 },
  { text: "I would rather die than let you go", time: 81 },
  { text: "Juliet to your Romeo", time: 86.5 },
  { text: "How I heard you say:", time: 90 },
  { text: "I would never fall in love again until I found her", time: 93.5 },
  { text: "I said: I would never fall unless it's you I fall into", time: 100 },
  { text: "I was lost within the darkness, but then I found her", time: 108 },
  { text: "I found you", time: 169 },
  { text: "I would never fall in love again until I found her", time: 176 },
  { text: "I said: I would never fall unless it's you I fall into", time: 183 },
  { text: "I was lost within the darkness, but then I found her", time: 188 },
  { text: "I found you", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);