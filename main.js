// JavaScript principal para o site da ASTTEC

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.getElementById('menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnMenuBtn && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica de envio do formulário
            // Como é um protótipo, apenas mostraremos uma mensagem de sucesso
            
            const formMessage = document.getElementById('form-message');
            formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
            formMessage.style.color = 'green';
            formMessage.style.display = 'block';
            
            // Limpar formulário
            contactForm.reset();
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // Formulário de agendamento
    const schedulingForm = document.getElementById('scheduling-form');
    if (schedulingForm) {
        schedulingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica de agendamento
            // Como é um protótipo, apenas mostraremos uma mensagem de sucesso
            
            const formMessage = document.getElementById('scheduling-message');
            formMessage.textContent = 'Agendamento realizado com sucesso! Confirmaremos por e-mail e WhatsApp.';
            formMessage.style.color = 'green';
            formMessage.style.display = 'block';
            
            // Limpar formulário
            schedulingForm.reset();
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});
