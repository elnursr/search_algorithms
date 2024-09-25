# **Searching Algorithms (Axtarish Alqoritmleri)**
---
### 3 nov axtarish alqoritmi movcuddur ve bunlar ashagidakilardir:
1. Linear search (Xetti axtarish)
2. Binary search (Ikili axtarish)
3. Jump search (Suretli axtarish)
---
## Adindan melum oldugu kimi *linear search* (xetti axtarish) hedef simvol-u xetti shekilde axtarar. Bunun uchun de *linear search*-un alqoritmik ardicilligi ashagidaki kimi olur:

1. Bashdan sona
   * array-in ve list-in ilk elementinden bashlayir.
2. Her bir elementi muqayise etmek
   * hazirki elementle axtarilan elementi muqayise etmek
   * eger hazirki element axtarilan elementle beraberdirse hemin elementin *index*-ni qaytarmaq
3. Novbeti elemente kechmek
   * eger hazirki element axtarilan elemente beraber deyilse, list-de ve ya array-de olan novbeti elemente kechmek
4. Tekrarlamaq
   * element tapilana ve eyni zamanda array-in son elementine gedib chatana qeder prossesi davam ederek tekrarlamaq
5. Neticeni qaytarmaq
   * eger element tapilsa hemin elementin index-ni qaytaririq. tapilmadigi halda ise tapilmadigina dair melumat return edirik ekser zaman array-de menfi index olmadigi uchun -1 return olunur.

### Example Code:
1. Procedural paradigm-e uygun code numunesi:
```javascript

// ******* procedural_paradigm_start_here *******

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    targetSymbol = 'E';

let index = 0;
while (index < myArray.length) {
    if (targetSymbol === myArray[index]) {
        console.log(index);
    }
    index++;
}
if (targetSymbol !== myArray[index]) {
    return -1;
}

// ******* procedural_paradigm_end_here *******

```
1. Functional paradigm-e uygun code numunesi:
```javascript

// ******* functional_paradigm_start_here *******

let searchObject = {
    customArray: myArray,
    targetItem: 'S'
};

// result = customLinearSearch(myArray, '#'); // index => -1
result = customLinearSearch(searchObject); // index => 28

console.log(result);

function customLinearSearch({ customArray, targetItem }) {
    let index = 0;
    while (index < customArray.length) {
        if (targetItem === customArray[index]) {
            return index;
        }
        index++;
    }
    if (targetItem !== customArray[index]) {
        return -1;
    }
}

// ******* functional_paradigm_end_here *******
```