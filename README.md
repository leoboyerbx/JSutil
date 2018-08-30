# JSutil

Un ensemble de modules JS pour gagner du temps. Pour les utiliser il est possible de copier-coller le code directement dans votre app, mais il est recommandé d'utiliser un bundler comme Webpack ou Browserify.

# Modules Front-end

## querySelector()

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

---

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

On commence par initialiser le module, juste après l'importation. Pour cela on appelle la fonction `init()`

```javascript
DOMAnimations.init()
```

On peut maintenant utiliser les 3 effets comme des méthodes de `HTMLElement`, avec en argument la durée de l'animation (500ms par défaut): 

```javascript
element.slideToggle() //Afficher l'élément avec une animation de 500 ms

element.slideUp(1000) //Cacher l'élément avec une animation de 1s

element.slideToggle(400) //Afficher ou cacher l'élément avec une animation de 400 ms
```

Les 3 effets:

- `slideUp()`: Cache l'élément (repliage)

- `slideDown()`: Affiche l'élément (dépliage)

- `slideToggle()`: Affiche l'élément si il est caché et le cache si il est affiché


Si on ne souhaite pas avoir à appeler une fonction au début du script, on peut utiliser directement les méthodes de l'objet `DOMAnimations`.

Dans ce cas les fonctions prennent 2 arguments :

- `element`: l'élément à afficher ou à masquer

- `duration`: la durée de l'animation, par défaut à 500 ms.

#### Exemples

```javascript
DOMAnimations.slideToggle(element) //Afficher l'élément avec une animation de 500 ms

DOMAnimations.slideUp(element, 1000) //Cacher l'élément avec une animation de 1s

DOMAnimations.slideToggle(element, 400) //Afficher ou cacher l'élément avec une animation de 400 ms
```

________________________________________________________


> Dans le fichier `front-end/css.js`

Ce module permet un accès plus simple à  `window.getComputedStyle()` en lecture et à `element.style` en écriture.

En clair, **il permet de récupérer les valeurs des propriétés CSS d'un élément, ainsi que de les modifier**.

### Importer le module

Importation comme un module ES6, si vous utilisez un bundler

```javascript
import css from './css'
```

### Utilisation

La fonction `css()` se comporte différemment selon le nombre et le type d'arguments qui lui sont passés.

##### Lire les propriétés

###### Lire une seule propriété

Pour obtenir la valeur d'une seule propriété, on passe en arguments l'élément ciblé et la propriété que l'on veut lire.

```javascript
let width = css(element, 'width') //Renvoie la valeur de la propriété css 'width'

// Exemple: renvoie 'auto', ou bien '120px'
```

###### Lire plusieurs propriétés à la fois

Pour obtenir la valeur d'une seule propriété, on passe en arguments l'élément ciblé et un `Array` contenant les propriétés que l'on veut lire.

```javascript
let properties = css(element, ['width', 'height', 'background-color'])
```

La valeur retournée est alors un tableau à 2 dimensions contenant les propriétés et leurs valeurs. Par exemple pour l'instruction donnée ci-dessus,  la variable`properties` ressembler à ceci:

```javascript
[[ "width", "auto" ],[ "height", "auto" ],[ "background-color", "rgb(240, 0, 0)"]]
```

##### Modifier les propriétés

###### Modifier une seule propriété

Pour modifier la valeur d'une seule propriété, on passe en arguments l'élément ciblé, le nom de la propriété sur laquelle agir, et la valeut désirée.

```javascript
css(element, 'color', '#f00')
```

Il est possible de modifier une propriété de manière relative:

```javascript
// Augmenter la hauteur de 50 px
css(element, 'height', '+=50px')

// Réduire la largeur de 30 px
css(element, 'width', '-=30px')
```

La valeur sera ajoutée à celle renvoyée par `window.getComputedStyle`.

> Attention: Cette façon de modifier les valeur de fonctionne que pour les valeurs numériques et ne supporte que l'unité `px`. L'utilisation d'une autre propriété renvoie l'erreur `Error in css() module: Unsupported property, or you need to use px values.`

###### Modifier plusieurs propriétés à la fois

Pour agir sur plusieurs propriétés, on passe en arguments l'élément ciblé, et un objet contenant toutes les propriétés à modifier.

```javascript
// Modifier plusieurs propriétés
css(element, {
  'width': '250px',
  'margin-bottom': '20px',
  'color': 'blue'
})
```

A noter que la modification relative est possible ici aussi.

```javascript
css(element, {
  'width': '+=20px', //Augmenter la largeur de 20 px
  'margin-bottom': '-=15px', // Réduire la marge inférieure de 15 px
  'overflow': 'hidden'
})
```

---

Pour tout signalement de bugs ou demande de fonctionnalités, utilisez les *issues* de GitHub ou bien contactez moi sur Twitter [@lboyer_bx](https://twitter.com/lboyer_bx).
