// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I don't wanna talk", time: 29 },
  { text: "About the things we've gone through", time: 34 },
  { text: "Though it's hurting me", time: 37 },
  { text: "Now it's history", time: 40 },
  { text: "I've played all my cards", time: 44 },
  { text: "And that's what you've done too", time: 48 },
  { text: "Nothing more to say", time: 52 },
  { text: "No more ace to play", time: 55 },
  { text: "The winner takes it all", time: 60 },
  { text: "The loser's standing small", time: 64 },
  { text: "Beside the victory", time: 67 },
  { text: "That's her destiny", time: 71 },
  { text: "I was in your arms", time: 76 },
  { text: "Thinking I belonged there", time: 79 },
  { text: "I figured it made sense", time: 82 },
  { text: "Building me a fence", time: 86 },
  { text: "Building me a home", time: 91 },
  { text: "Thinking I'd be strong there", time: 94 },
  { text: "But I was a fool", time: 100 },
  { text: "Playing by the rules", time: 103 },
  { text: "The gods may throw a dice", time: 106 },
  { text: "Their minds as cold as ice", time: 110 },
  { text: "And someone way down here", time: 114 },
  { text: "Loses someone dear", time: 118 },
  { text: "The winner takes it all", time: 122 },
  { text: "The loser has to fall", time: 125 },
  { text: "It's simple and it's plain", time: 129 },
  { text: "Why should I complain?", time: 132 },
  { text: "But tell me, does she kiss", time: 136 },
  { text: "Like I used to kiss you?", time: 140 },
  { text: "Does it feel the same", time: 145 },
  { text: "When she calls your name?", time: 148 },
  { text: "Somewhere deep inside", time: 151 },
  { text: "You must know I miss you", time: 156 },
  { text: "But what can I say?", time: 159 },
  { text: "Rules must be obeyed", time: 162 },
  { text: "The judges will decide", time: 167 },
  { text: "The likes of me abide", time: 171 },
  { text: "Spectators of the show", time: 175 },
  { text: "Always staying low", time: 179 },
  { text: "The game is on again", time: 182 },
  { text: "A lover or a friend", time: 185 },
  { text: "A big thing or a small", time: 189 },
  { text: "The winner takes it all", time: 193 },
  { text: "I don't wanna talk", time: 200 },
  { text: "Cause it makes me feel sad", time: 204 },
  { text: "And I understand", time: 208 },
  { text: "You've come to shake my hand", time: 212 },
  { text: "I apologize", time: 216 },
  { text: "If it makes you feel bad", time: 219 },
  { text: "Seeing me so tense", time: 223 },
  { text: "No self-confidence", time: 225 },
  { text: "But you see", time: 226 },
  { text: "The winner takes it all", time: 227 },
  { text: "The winner takes it aaaaaaall", time: 238 },
  { text: "The game is on again", time: 245 },
  { text: "A lover or a friend", time: 249 },
  { text: "A big thing or a small", time: 252 },
  { text: "The winner takes it aaaaaall", time: 257 },
  //{ text: "Takes it all", time: 265 },
  { text: "The winner takes it all", time: 279 },
  { text: "El socio produciendo", time: 287 },
  { text: "No hay que esperar el dia de las flores amarillas para poder dartelas, tq negra curtida <3", time: 292 },
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


// --- NUEVA LÓGICA PARA MENSAJES SECUENCIALES DEL "TÍTULO" ---

const sequentialMessageElement = document.getElementById("sequential-message");

// Define tus mensajes y el tiempo en que deben aparecer
const sequentialMessagesData = [
    { text: "Te estarás preguntando, ¿qué es esta vaina que hizo este loco ahora?", time: 3 }, 
    { text: "Pues, es algo bastante espontaneo.", time: 10 }, 
    { text: "Espero que te guste la verdad", time: 13 }, 
    { text: "Es increible como despues de escribir mas de 2500 lineas de codigo, lo que mas se me complica es esto, so dumb", time: 15 }, 
    { text: "Pero wey, ojala existiera una sola palabra que pueda expresar lo agradecido que estoy contigo", time: 20 }, 
    { text: "Y no es solo por ayudarme y estar para mi en todo momento", time: 25 }, 
    { text: "Es por siempre poder confiar en mi", time: 28 },
    { text: "Abrirte conmigo, lo cual se que no es algo que haces con cualquiera", time: 32 }, 
    { text: "Gracias por darme la oportunidad de ser tu hombro", time: 36 }, 
    { text: "And no matter what happens, I will always choose to be that shoulder.", time: 42 },
    { text: "Te he escrito una carta, te acabo de hacer unas flores amarillas con una cancion de una de las mejores pelis de drama que hay", time: 48 },
    { text: "Y a saber que mas hare jejeje", time: 53 }, 
    { text: "Solo quiero que disfrutes", time: 56 },
    { text: "Se que no estas en tu mejor momento", time: 59 },
    { text: "Pero no estas sola loca, nunca lo has estado y nunca lo estaras", time: 63 },
    { text: "Al diablo los 7000km", time: 65 },
    { text: "Yo te prometo, te doy mi palabra. Que si trabajamos y lo damos todo, mas pronto de lo que crees, todos nos estaremos viendo", time: 70 },
    { text: "Bueno ya es bastante texto. Le tengo que bajar 2", time: 75 },
    { text: "Feliz cumple negra, no te haces la idea de lo mucho que te quiero", time: 85 },
];

let currentMessageIndex = 0;
let isAnimatingMessage = false; // Para evitar superposición de animaciones

function showNextSequentialMessage() {
    if (currentMessageIndex < sequentialMessagesData.length) {
        const messageData = sequentialMessagesData[currentMessageIndex];
        const currentTime = Math.floor(audio.currentTime);

        // Si es el momento de mostrar este mensaje y no hay otra animación en curso
        if (currentTime >= messageData.time && !isAnimatingMessage) {
            isAnimatingMessage = true; // Marca que una animación está en curso

            // 1. Mostrar el texto con fadeIn
            sequentialMessageElement.innerHTML = messageData.text;
            sequentialMessageElement.style.animation = "fadeIn 3s ease-in-out forwards"; // Aplica fadeIn

            // 2. Esperar la duración de la aparición + el tiempo que quieres que esté visible
            // Aquí, 3 segundos para fadeIn + 5 segundos visible = 8 segundos antes de empezar a desaparecer
            const displayDuration = 5; // Duración en segundos que el texto estará visible antes de desaparecer
            const fadeInAnimationDuration = 3; // Duración de la animación fadeIn

            setTimeout(() => {
                // 3. Iniciar la animación de desaparición (fadeOut)
                sequentialMessageElement.style.animation = "fadeOut 3s ease-in-out forwards"; // Aplica fadeOut

                // 4. Esperar la duración de la desaparición y luego pasar al siguiente mensaje
                const fadeOutAnimationDuration = 3; // Duración de la animación fadeOut

                setTimeout(() => {
                    sequentialMessageElement.style.opacity = 0; // Asegura que esté completamente oculto
                    sequentialMessageElement.style.animation = ""; // Limpia la animación para el siguiente uso
                    isAnimatingMessage = false; // Libera el bloqueo de animación
                    currentMessageIndex++; // Avanza al siguiente mensaje
                    // Llama recursivamente para verificar el siguiente mensaje
                    // Esto es importante para que la secuencia continúe si los tiempos son cercanos
                    showNextSequentialMessage();
                }, fadeOutAnimationDuration * 1000); // Convertir a milisegundos
            }, (fadeInAnimationDuration + displayDuration) * 1000); // Convertir a milisegundos
        }
    }
}

// Escucha el evento 'timeupdate' del audio para sincronizar los mensajes
audio.addEventListener('timeupdate', showNextSequentialMessage);

// Inicialmente, oculta el elemento para que no aparezca antes de su turno
sequentialMessageElement.style.opacity = 0;
