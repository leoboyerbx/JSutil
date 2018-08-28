/**
 * Fonction chargée de définir la propriété
 * @param {HTMLElement} element Élément sur lequel agir
 * @param {String} property Propriété
 * @param {String|Number} value Valeur
 */
 let setProperty = function (element, property, value) {
    element.style[property] = "10px"
 }

 /**
 * Fonction qui reproduit le .css() de jQuery
 * @param {HTMLElement} element Element sur lequel a lieu l'action
 * @param {String|Object} property Propriété ou tableau de propriétés
 * @param {String|Number|Function} action Valeur de modification
 */
export default function (element, property, action) {
    if (arguments.length === 2) {
        if (typeof property === 'string') {     //Cas d'une demande de propriété
            return window.getComputedStyle(element).getPropertyValue(property)
        } else if (typeof property === 'object' && Array.isArray(property)) {     //Cas d'une demande de propriétés multiples
            let styleProps = []
            property.forEach((prop) => {
                styleProps.push([prop, window.getComputedStyle(element).getPropertyValue(prop)])
            })
            return styleProps
        } else if (typeof property === 'object' && !Array.isArray(property)) {
            let propsArray = Object.keys(property)
            for (let i = 0; i < propsArray.length; i++) {
                element.style[propsArray[i]] = property[propsArray[i]]
            }
        } else {
            return null
        }
    } else if (arguments.length === 3) {
        if (typeof action === 'string' || typeof action === 'number') { // Cas de modification d'une seule propriété
            setProperty(element, property, action)
            return action
        } else {
            return null
        }
    } else {
        return null
    }
}