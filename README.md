# JSutil

Un ensemble de modules JS pour gagner du temps. Pour les utiliser il est possible de copier-coller le code directement dans votre app, mais il est recommandé d'utiliser un bundler comme Webpack ou Browserify.

# Modules Front-end

## querySelector

> Fichier: `front-end/querySelector.js`

Ce module permet de gagner du temps avec les méthodes `document.querySelector()` et `document.querySelectorAll()`.

### Importer le module

Comme n'importe quel module ES6

```javascript
import qS from './querySelector'
```

### Utilisation

La syntaxe est la même que pour `document.querySelector()` et `document.querySelectorAll()`, donc on utilise les sélecteurs Javascript.

#### Récupérer plusieurs éléments

En utilisant une classe

```javascript
let elements = qS(".elements") ////Équivalent à document.querySelectorAll(".elements")
```

Renverra une `NodeList` contenant toutes les occurences. On peut aussi récupérer des éléments en utilisant un tagName:

```javascript
let div = qS("div") ////Équivalent à document.querySelectorAll("div")
```

#### Récupérer un unique élément

Récupérer un élément par son id

```javascript
let element = qS("#element") //Équivalent à document.querySelector("#element")
```

Récupérer un élément par sa classe

```javascript
let element = qS(".elements") //Équivalent à document.querySelector(".elements")
```

Si seul un élément de cette classe existe, le résultat sera un unique élément et pas une `NodeList`, de même pour l'utilisation des attributs ou autre.

#### Cas particulier

Si vous voulez quand même obtenir une `NodeList` même s'il n'y a qu'un seul élément, passez le paramètre `forceNodeList` à `true`.

```javascript
let element = qS("#element", true)
```

### Pourquoi l'utiliser ?

Il permet une meilleure lisibilité du code et n'utilise qu'une seule instruction pour sélectionner un seul ou plusieurs éléments.



__________________________________________________________________________

## DOMAnimations

> Fichier: `front-end/domAnimations.js`

Ce module reproduit les effets `slideUp()`, `slideDown()` et `slideToggle()` de jQuery: il affiche ou masque un élement avec un effet de repli.

Basé sur  [Le travail de  Jonathan Boyer sur Graphikart](https://www.grafikart.fr/tutoriels/javascript/slide-javascript-1016).

### Importer le module

Comme un module ES6. On obtient un objet nommé `DOMAnimations`

```javascript
import * as DOMAnimations from './domAnimations'
```

### Utilisation

Les 3 fonctions de l'objet prennent 2 arguments:

- `element`: l'élément à afficher ou à masquer

- `duration`: la durée de l'animation, par défaut à 500 ms.

Chaque fonction a un rôle:

- `slideUp()`: Cache l'élément (repliage)

- `slideDown()`: Affiche l'élément (dépliage)

- `slideToggle()`: Affiche l'élément si il est caché et le cache si il est affiché

#### Exemples

```javascript
DOMAnimations.slideToggle(element) //Afficher l'élément avec une animation de 500 ms

DOMAnimations.slideUp(element, 1000) //Cacher l'élément avec une animation de 1s

DOMAnimations.slideToggle(element, 400) //Afficher ou cacher l'élément avec une animation de 400 ms
```
