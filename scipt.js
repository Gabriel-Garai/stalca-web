// 1. Lógica do Widget de Clima (Curitiba e Matinhos)
async function buscarClimaParana() {
    const locais = [
        { id: "clima-curitiba", nome: "Curitiba", lat: -25.4284, lon: -49.2733 },
        { id: "clima-matinhos", nome: "Matinhos", lat: -25.8153, lon: -48.5428 }
    ];

    for (let local of locais) {
        const elementoSpan = document.getElementById(local.id);
        if (!elementoSpan) continue;

        try {
            const resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${local.lat}&longitude=${local.lon}&current_weather=true`);
            const dados = await resposta.json();
            if (dados && dados.current_weather) {
                const temperatura = Math.round(dados.current_weather.temperature);
                elementoSpan.textContent = `${local.nome}: ${temperatura}°C`;
            } else {
                elementoSpan.textContent = `${local.nome}: N/D`;
            }
        } catch (erro) {
            console.error(`Erro ao carregar clima de ${local.nome}:`, erro);
            elementoSpan.textContent = `${local.nome}: Indisponível`;
        }
    }
}

// 2. Lógica do Carrossel de Curiosidades (Página Inicial)
function iniciarCarrossel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    let currentIndex = 0;
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 4500); // Troca a cada 4.5 segundos
}

document.addEventListener("DOMContentLoaded", () => {
    buscarClimaParana();
    iniciarCarrossel();
});