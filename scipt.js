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
            const temperatura = Math.round(dados.current_weather.temperature);
            
            elementoSpan.textContent = `${local.nome}: ${temperatura}°C`;
        } catch (erro) {
            console.error(`Erro ao carregar clima de ${local.nome}:`, erro);
            elementoSpan.textContent = `${local.nome}: Indisponível`;
        }
    }
}

// Executa assim que a página carrega
document.addEventListener("DOMContentLoaded", () => {
    buscarClimaParana();
});