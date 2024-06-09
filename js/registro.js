document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    
    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        
        const user = { name, age, phone, email };
        saveUser(user);
    });
});

function saveUser(user) {
    let users = JSON.parse(localStorage.getItem('userData')) || [];
    users.push(user);
    localStorage.setItem('userData', JSON.stringify(users));
    alert('Usuario registrado exitosamente');
    window.location.href = 'index.html';
}

