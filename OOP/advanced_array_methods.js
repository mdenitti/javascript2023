let mijnArray = [
    {
        naam: "appel",
        prijs: 1.99,
        hoeveelheid: 5,
        categorie: "fruit"
    },
    {
        naam: "banaan",
        prijs: 2.99,
        hoeveelheid: 10,
        categorie: "fruit"
    },
    {
        naam: "wortel",
        prijs: 0.99,
        hoeveelheid: 20,
        categorie: "groente"
    },
    {
        naam: "sla",
        prijs: 1.99,
        hoeveelheid: 10,
        categorie: "groente"
    },
    {
        naam: "broccoli",
        prijs: 2.99,
        hoeveelheid: 5,
        categorie: "groente"
    },
    {
        naam: "sinaasappel",
        prijs: 1.99,
        hoeveelheid: 10,
        categorie: "fruit"
    },
            {
                naam: "druif",
                prijs: 2.99,
                hoeveelheid: 5,
                categorie: "fruit"
            }
    ];


// Oefening 1: Map
// simple array return, based on the callback hence 
// returning an array that contais only the product names
let productNamen = mijnArray.map(product => product.naam);
console.log("1. Productnamen:", productNamen);

// Oefening 2: Filter
let dureProducten = mijnArray.filter(product => product.prijs > 2.00);
console.log("2. Producten duurder dan €2.00:", dureProducten);

// Oefening 3: Reduce
// Used to combine elements of an array to a single value (accumulator)
// Used to calculate the total value of an array
let totaleWaarde = mijnArray.reduce((acc, product) => acc + (product.prijs * product.hoeveelheid), 0);
console.log("3. Totale waarde van alle producten:", totaleWaarde);

// Oefening 4: Map & Filter
// combo van oef 2 en 1 __ chaining to the recue... we also could have used .map(product => product.naam) on a
// new array... but using the chains .... it's much shorter!
let namenMetMeerDanVijf = mijnArray.filter(product => product.hoeveelheid > 5).map(product => product.naam);
console.log("4. Productnamen met meer dan 5 stuks:", namenMetMeerDanVijf);

// Oefening 5: ForEach
console.log("5. Naam en totale waarde van elk product:");
mijnArray.forEach(product => console.log(`${product.naam}: €${product.prijs * product.hoeveelheid}`));

// Oefening 6: Map & Reduce
let gemiddeldePrijs = mijnArray.map(product => product.prijs).reduce((acc, prijs) => acc + prijs, 0) / mijnArray.length;
console.log("6. Gemiddelde prijs van alle producten:", gemiddeldePrijs);

// Oefening 7: Filter & Reduce - combo oef 2 + 3
let totaleWaardeFruit = mijnArray.filter(product => product.categorie === "fruit").reduce((acc, product) => acc + (product.prijs * product.hoeveelheid), 0);
console.log("7. Totale waarde van fruit:", totaleWaardeFruit);

// Oefening 8: Aangepaste functie
function totaleHoeveelheidInCategorie(producten, categorie) {
    return producten.filter(product => product.categorie === categorie).reduce((acc, product) => acc + product.hoeveelheid, 0);
}

console.log("8. Totale hoeveelheid groente:", totaleHoeveelheidInCategorie(mijnArray, "fruit"));