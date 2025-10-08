# Proyecto-C3-2025
## Subtítulo
### Subtítulo segundo nivel
Repositorio para los ejercicios del curso de **Proyecto Integrador** del tercer cuatrimestre del 2025

*Cursiva*
**Negrita**

- item 1
- item 2
- item 3

1. item 1
2. item 2
3. item 3

> Cita textual
> Lorem ipsum 

La función `Math.pow()` permite elevar un valor a una potencia

### Bloque de código

```javascript
function calcularIMC() {
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso / Math.pow(estatura, 2);

    document.getElementById("txtIMC").value = imc.toFixed(2);

    let clasificacion = clasificarImc();

    document.getElementById("txtClasificacionImc").value = clasificacion;
}
``` 
