const listaDellaSpesa = [
    'Latte',
    'Burro',
    'Uova',
    'Pomodori',
    'Pasta',
    'Farina',
];

const listItem = document.getElementById('list-item');

let i = 0;

while ( i < listaDellaSpesa.length ){
    console.log(listaDellaSpesa[i]);
    const elementoSpesa = document.createElement('li');
    elementoSpesa.classList.add('p-3', 'list-group-item');
    elementoSpesa.innerText = listaDellaSpesa[i];
    i++;

    elementoSpesa.addEventListener('click', function(){
    elementoSpesa.classList.add('bg-primary', 'text-white');
    })

    listItem.append(elementoSpesa);
}