# JSutil

Un ensemble de modules JS pour gagner du temps. Pour les utiliser il est possible de copier-coller le code directement dans votre app, mais il est recommandé d'utiliser un bundler comme Webpack ou Browserify.

# Modules

## Front-end

### querySelector

> Fichier: `front-end/querySelector.js`

Ce module permet de gagner du temps avec les méthodes `document.querySelector()` et `document.querySelectorAll()`.

#### Importer le module

Comme n'importe quel module ES6

```javascript
import qS from './querySelector'
```

#### Utilisation

La syntaxe est la même que pour `document.querySelector()` et `document.querySelectorAll()`, donc on utilise les sélecteurs Javascript.

##### Récupérer plusieurs éléments

En utilisant une classe

```javascript
let elements = qS(".elements") ////Équivalent à document.querySelectorAll(".elements")
```

Renverra une `NodeList` contenant toutes les occurences. On peut aussi récupérer des éléments en utilisant un tagName:

```javascript
let div = qS("div") ////Équivalent à document.querySelectorAll("div")
```

##### Récupérer un unique élément

Récupérer un élément par son id

```javascript
let element = qS("#element") //Équivalent à document.querySelector("#element")
```

Récupérer un élément par sa classe

```javascript
let element = qS(".elements") //Équivalent à document.querySelector(".elements")
```

Si seul un élément de cette classe existe, le résultat sera un unique élément et pas une `NodeList`, de même pour l'utilisation des attributs ou autre.

##### Cas particulier

Si vous voulez quand même obtenir une `NodeList` même s'il n'y a qu'un seul élément, passez le paramètre `forceNodeList` à `true`.

```javascript
let element = qS("#element", true)
```

#### Pourquoi l'utiliser ?

Il permet une meilleure lisibilité du code et n'utilise qu'une seule instruction pour sélectionner un seul ou plusieurs éléments.
