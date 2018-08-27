/**
 * Syntaxe courte pour récupérer un élément du DOM avec QuerySelectorAll
 * @param {string} query 
 * @returns {(HTMLElement|NodeList)} Element ou liste d'éléments si plusieurs
 */
export default (query) => {
    let result = document.querySelectorAll(query)
    if (!result[0]) {
        return null
    } else if (result.length === 1) {
        return result[0]
    } else {
        return result
    }
}