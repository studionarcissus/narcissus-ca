const translations = {
  en: {
    nav_shop: "Shop",
    nav_about: "About",
    nav_journal: "Journal",
    nav_contact: "Contact",
    cta_shop: "Shop Now",

    hero_title: "The luxury of slowing down.",
    hero_subtitle:
      "Luxury self-care gift boxes designed to help you pause, reconnect, and return to yourself."
    hero_label: "Permission • Pause • Presence",

hero_note1: "✓ Hand-packed in British Columbia",
hero_note2: "✓ Free delivery across Metro Vancouver",
hero_note3: "✓ Canada-wide shipping available",

hero_subtext:
"Thoughtfully curated for meaningful moments, heartfelt gifting, and everyday rituals.",

hero_shop: "Shop Collection",

hero_corporate: "Corporate Gifting",
  },

  fr: {
    nav_shop: "Boutique",
    nav_about: "À propos",
    nav_journal: "Journal",
    nav_contact: "Contact",
    cta_shop: "Acheter",

    hero_title: "Le luxe de ralentir.",
    hero_subtitle:
      "Des coffrets de soins de luxe conçus pour vous aider à faire une pause, vous reconnecter et revenir à vous-même."
      hero_label: "Permission • Pause • Présence",

hero_note1: "✓ Assemblé à la main en Colombie-Britannique",
hero_note2: "✓ Livraison gratuite dans le Grand Vancouver",
hero_note3: "✓ Livraison partout au Canada",

hero_subtext:
"Soigneusement conçus pour des moments précieux, des cadeaux attentionnés et des rituels quotidiens.",

hero_shop: "Découvrir la collection",

hero_corporate: "Cadeaux d'entreprise",
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);
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