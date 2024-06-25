// Ajouter un événement de soumission au formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire
    alert('Votre message a été envoyé avec succès!'); // Afficher un message de succès
    // Vous pouvez ajouter ici le code pour envoyer le formulaire via AJAX
});
