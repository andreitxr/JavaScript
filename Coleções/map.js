
function getAdmins(map){
    let admins = [];
    let users = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
        else
            users.push(key);
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');
usuarios.set('Ana', 'User');
usuarios.set('Arthur', 'Admin');

console.log(getAdmins(usuarios));