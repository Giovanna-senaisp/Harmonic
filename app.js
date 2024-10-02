const menu = [
    {
        id: 1,
        title: "Diet Mountain Dew - Lana del rey",
        category: "Pop",
        img: "./imagens/pop1.jpg",
        desc: `A canção lida com o lado sombrio de um relacionamento perigoso e sedutor, explorando temas como glamour e fatalismo.`
    },
    {
        id: 2,
        title: "VOID - Melanie Martinez",
        category: "Pop",
        img: "./imagens/pop2.jpg",
        desc: `Explora sentimentos de vazio e inadequação, onde a pessoa tenta preencher um vazio emocional, mas se perde no processo.`
    },
    {
        id: 3,
        title: "Fallen Star - The Neighbourhood",
        category: "Pop",
        img: "./imagens/pop3.jpg",
        desc: `Fala sobre a perda e a luta para lidar com sentimentos de solidão e melancolia após um rompimento.`
    },
    {
        id: 4,
        title: "Americano - Lady gaga",
        category: "Pop",
        img: "./imagens/pop4.jpg",
        desc: `Um hino que celebra a liberdade e os direitos dos imigrantes, além de questões relacionadas ao amor proibido e o casamento igualitário.`
    },
    {
        id: 5,
        title: "I Bet on Losing Dogs - mitski",
        category: "Pop",
        img: "./imagens/pop5.jpg",
        desc: `Uma reflexão sobre amor não correspondido e como a pessoa continua investindo em relacionamentos que não têm futuro.`
    },
    {
        id: 6,
        title: "Sorri, sou rei - Natiruts",
        category: "MPB",
        img: "./imagens/mpb1.jpg",
        desc: `Uma celebração da positividade e da paz interior, com uma mensagem de amor próprio e aceitação diante das dificuldades da vida.`
    },
    {
        id: 7,
        title: "João e Maria - Chico boarque",
        category: "MPB",
        img: "./imagens/mpb2.jpg",
        desc: `Conta a história de um amor infantil e ingênuo que é relembrado com nostalgia, mostrando a simplicidade e pureza da infância.`
    },
    {
        id: 8,
        title: "Hoje Cedo - Emicida fit.Pitty",
        category: "MPB",
        img: "./imagens/mpb3.jpg",
        desc: `Aborda temas de superação, dificuldades da vida e crescimento pessoal, com uma reflexão sobre erros e aprendizado.`
    },
    {
        id: 9,
        title: "Ainda Gosto Dela - Snank",
        category: "MPB",
        img: "./imagens/mpb4.jpg",
        desc: `Fala sobre a dificuldade de seguir em frente após o fim de um relacionamento, expressando a saudade e o apego à ex-parceira.`
    },
    {
        id: 10,
        title: "Pais e filhos - Legião urbana",
        category: "MPB",
        img: "./imagens/mpb5.jpg",
        desc: `Reflete sobre os conflitos e mal-entendidos entre gerações, especialmente entre pais e filhos, abordando também o tema do suicídio.`
    },
    {
        id: 11,
        title: "Behind Blue Eyes - Limp Bizkit",
        category: "Rock/Metal",
        img: "./imagens/rock1.jpg",
        desc: `Esta música expressa a dor e a solidão de alguém que é mal compreendido e luta para esconder suas emoções sombrias.`
    },
    {
        id: 12,
        title: "Symphony of Destruction - Megadeth",
        category: "Rock/Metal",
        img: "./imagens/rock2.jpg",
        desc: `Trata-se da corrupção no poder, mostrando como líderes podem ser manipulados e causar destruição em massa.`
    },
    {
        id: 13,
        title: "Creep - Radiohead",
        category: "Rock/Metal",
        img: "./imagens/rock3.jpg",
        desc: `Aborda temas de insegurança e inadequação, contando a história de alguém que se sente deslocado e fora de lugar.`
    },
    {
        id: 14,
        title: "Roots Bloody Roots - Sepultura",
        category: "Rock/Metal",
        img: "./imagens/rock4.jpg",
        desc: `Celebra a importância das raízes culturais e ancestrais, refletindo o orgulho de origem, especialmente em um contexto brasileiro.`
    },
    {
        id: 15,
        title: "Last resort - Papa Roach",
        category: "Rock/Metal",
        img: "./imagens/rock5.jpg",
        desc: `A canção fala sobre sentimentos de desespero e depressão, retratando alguém à beira do suicídio, mas também como um pedido de socorro.`
    },
    {
        id: 16,
        title: "Moanin' - The Jazz Messengers",
        category: "Jazz",
        img: "./imagens/jazz1.jpg",
        desc: `Uma faixa instrumental que transmite melancolia e introspecção através de seus arranjos de jazz, sem letras, mas com muita emoção expressa na música.`
    },
    {
        id: 17,
        title: "Somethin' Stupid - Frank Sinatra",
        category: "Jazz",
        img: "./imagens/jazz2.jpg",
        desc: `Uma canção sobre amor não correspondido, onde o protagonista confessa seus sentimentos, mas teme dizer algo "estúpido" que possa estragar tudo.`
    },
    {
        id: 18,
        title: "Lonesome Town - Ricky Nelson",
        category: "Jazz",
        img: "./imagens/jazz3.jpg",
        desc: `Fala sobre um lugar metafórico onde os corações partidos vão após uma desilusão amorosa, destacando a tristeza da solidão.`
    },
    {
        id: 19,
        title: "Dream a Little Dream of Me - Ella Fitzgerald",
        category: "Jazz",
        img: "./imagens/jazz4.jpg",
        desc: `Uma canção suave e romântica que expressa o desejo de se encontrar com um ente querido nos sonhos.`
    },
    {
        id: 20,
        title: "Unforgettable - Nat King Cole",
        category: "Jazz",
        img: "./imagens/jazz5.jpg",
        desc: `Uma homenagem a alguém que é inesquecível, retratando um amor duradouro e profundo.`
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {


    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
            <header>
                <h4>${item.title}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
            </div>
        </article>`;
});
    displayMenu = displayMenu.join("");


    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
const categories = menu.reduce(
    function (values, item) {
    if (!values.includes(item.category)) {
        values.push(item.category);
}
    return values;
    },
    ["todos"]
);
    const categoryBtns = categories
    .map(function (category) {
    return `<button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`;
    })
    .join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = btnContainer.querySelectorAll(".filter-btn");
console.log(filterBtns);

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {


    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
        return menuItem;
        }
    });
    if (category === "todos") {
        diplayMenuItems(menu);
    } else {
        diplayMenuItems(menuCategory);
    }
    });
    });
}
