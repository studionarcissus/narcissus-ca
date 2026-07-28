const translations = {
  en: {
    card1_title: "Curated rituals",
card1_text: "Thoughtfully chosen details that turn ordinary moments into restorative ones.",

card2_title: "Elevated gifting",
card2_text: "Elegant packaging and premium textures that feel as beautiful as they are useful.",

card3_title: "Made to pause",
card3_text: "Designed to slow the pace of the day and invite a deeper sense of calm.",
    highlight1: "Hand-packed with care",
    highlight2: "Premium, tactile details",
    highlight3: "Designed for everyday rituals",
    nav_shop: "Shop",
    nav_about: "About",
    nav_journal: "Journal",
    nav_contact: "Contact",
    cta_shop: "Shop Now",

  hero_title: "The luxury of slowing down.",

  hero_subtitle:
    "Luxury self-care gift boxes designed to help you pause, reconnect, and return to yourself.",

  hero_label:
    "Permission • Pause • Presence",

hero_note1: "✓ Hand-packed in British Columbia",
hero_note2: "✓ Free delivery across Metro Vancouver",
hero_note3: "✓ Canada-wide shipping available",

hero_subtext:
"Thoughtfully curated for meaningful moments, heartfelt gifting, and everyday rituals.",

hero_shop: "Shop Collection",

hero_corporate: "Corporate Gifting",
intro_label: "A softer way to receive",

intro_title:
"Luxury that feels intimate, calming and beautifully considered.",

intro_text:
"Every box pairs elevated essentials with gentle rituals, bringing together texture, comfort and meaning in one memorable experience.",
trust1: "Hand-packed in British Columbia",
trust2: "Secure Checkout with Stripe",
trust3: "Metro Vancouver & Canada-wide Delivery",
trust4: "Ready to Gift",
featured_label: "Featured collection",
featured_title: "Thoughtfully curated self-care experiences.",

me_badge: "✨ Signature Collection",
me_description: "A quiet invitation to slow down, breathe, and return to yourself.",
price_from49: "From CA$49.99",

rainbow_badge: "🌈 Pride Collection",
rainbow_description: "A vibrant celebration of pride, comfort, kindness and self-love.",
price_from59: "From CA$59.99",
shipping_note: "🚚 Free delivery across Metro Vancouver.<br>Canada-wide prices already include our flat-rate shipping, so there are no additional shipping charges at checkout.",

buy_metro49: "Buy — Metro Vancouver • CA$49.99",
buy_canada61: "Buy — Canada-wide • CA$61.99",

buy_metro59: "Buy — Metro Vancouver • CA$59.99",
buy_canada71: "Buy — Canada-wide • CA$71.99",

product_meta: "✔ Ready to gift<br>✔ Hand-packed in Canada",

  },

  fr: {
    card1_title: "Rituels soigneusement sélectionnés",
card1_text: "Des détails choisis avec soin qui transforment les moments ordinaires en instants ressourçants.",

card2_title: "Des cadeaux raffinés",
card2_text: "Un emballage élégant et des textures haut de gamme, aussi belles qu'utiles.",

card3_title: "Conçu pour ralentir",
card3_text: "Créé pour ralentir le rythme de la journée et inviter à un profond sentiment de calme.",
    highlight1: "Assemblé avec soin",
highlight2: "Des détails raffinés",
highlight3: "Conçu pour les rituels du quotidien",
    nav_shop: "Boutique",
    nav_about: "À propos",
    nav_journal: "Journal",
    nav_contact: "Contact",
    cta_shop: "Acheter",

    hero_title: "Le luxe de ralentir.",

    hero_subtitle:
    "Des coffrets de soins de luxe conçus pour vous aider à faire une pause, vous reconnecter et revenir à vous-même.",

    hero_label:
    "Permission • Pause • Présence",

hero_note1: "✓ Assemblé à la main en Colombie-Britannique",
hero_note2: "✓ Livraison gratuite dans le Grand Vancouver",
hero_note3: "✓ Livraison partout au Canada",

hero_subtext:
"Soigneusement conçus pour des moments précieux, des cadeaux attentionnés et des rituels quotidiens.",

hero_shop: "Découvrir la collection",

hero_corporate: "Cadeaux d'entreprise",
intro_label: "Une manière plus douce de recevoir",

intro_title:
"Le luxe qui apaise, réconforte et touche profondément.",

intro_text:
"Chaque coffret réunit des essentiels soigneusement sélectionnés et des rituels délicats pour offrir une expérience riche en douceur, en confort et en émotion.",
trust1: "Assemblé à la main en Colombie-Britannique",
trust2: "Paiement sécurisé avec Stripe",
trust3: "Livraison dans le Grand Vancouver et partout au Canada",
trust4: "Prêt à offrir",
featured_label: "Collection vedette",
featured_title: "Des expériences de bien-être soigneusement conçues.",

me_badge: "✨ Collection Signature",
me_description: "Une douce invitation à ralentir, respirer et revenir à vous-même.",
price_from49: "À partir de 49,99 $ CA",

rainbow_badge: "🌈 Collection Fierté",
rainbow_description: "Une célébration vibrante de la fierté, de la bienveillance et de l'amour de soi.",
price_from59: "À partir de 59,99 $ CA",
shipping_note: "🚚 Livraison gratuite dans le Grand Vancouver.<br>Les prix pour le reste du Canada incluent déjà les frais de livraison, sans frais supplémentaires au paiement.",

buy_metro49: "Acheter — Grand Vancouver • 49,99 $ CA",
buy_canada61: "Acheter — Partout au Canada • 61,99 $ CA",

buy_metro59: "Acheter — Grand Vancouver • 59,99 $ CA",
buy_canada71: "Acheter — Partout au Canada • 71,99 $ CA",

product_meta: "✔ Prêt à offrir<br>✔ Assemblé à la main au Canada",
  }
};

function setLanguage(lang) {
localStorage.setItem("language", lang);

document.getElementById("lang-en")?.classList.remove("active");
document.getElementById("lang-fr")?.classList.remove("active");

if (lang === "en") {
    document.getElementById("lang-en")?.classList.add("active");
} else {
    document.getElementById("lang-fr")?.classList.add("active");
}

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
    }
});
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);
});
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("lang-en")?.addEventListener("click", () => {
    setLanguage("en");
  });

  document.getElementById("lang-fr")?.addEventListener("click", () => {
    setLanguage("fr");
  });

});
const languageButton =
document.getElementById("languageButton");

const languageMenu =
document.getElementById("languageMenu");

if(languageButton){

languageButton.onclick=function(){

languageMenu.style.display=
languageMenu.style.display==="block"
?
"none"
:
"block";

}

document.addEventListener("click",function(e){

if(!languageButton.contains(e.target)
&&
!languageMenu.contains(e.target))

languageMenu.style.display="none";

});

}

function changeLanguage(lang){

setLanguage(lang);

document.getElementById("currentLanguage").textContent=

lang==="en"

?

"English"

:

"Français";

languageMenu.style.display="none";

}