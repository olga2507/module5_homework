//Заданите 8
//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let map = new Map([
    ["fox", 'red'],
    ['wolf', 'gray'],
    ['hare', 'white']
  ]);


for (let name of map.keys()){
    console.log(`Ключ - ${name}; значение - ${map.get(name)}`);
}