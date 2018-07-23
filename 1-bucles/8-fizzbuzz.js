// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (i = 1; i <= 100; i++) {
    if (i = i % 3) {
       // i = "GEEKS";
    } else if (i = i % 5) {
       // i = "HUBS";
    } else if (i = i % 3 && i % 5) {
       // i = "GEEKSHUBS"
    }
    console.log(i);
}
