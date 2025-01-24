document.addEventListener("DOMContentLoaded", () => {
    // Cacher toutes les sections au chargement
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Ajouter un gestionnaire d'événements sur tous les liens
    const links = document.querySelectorAll(".enlace");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            // Identifier la section cible
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Si la section cible est déjà visible, on la cache
            if (targetSection.style.display === "block") {
                targetSection.style.display = "none";
            } else {
                // Sinon, cacher toutes les sections et afficher la section cible
                sections.forEach(section => {
                    section.style.display = "none";
                });
                if (targetSection) {
                    targetSection.style.display = "block";
                }
            }
        });
    });
    const subs = document.getElementById("subs")
    subs.addEventListener("click", hideBtn)
    function hideBtn(){
        alert("You are subscribed");
        subs.style.display = "none";
    }
});
