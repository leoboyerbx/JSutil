class DOMAnimations {
    /**
     * Masque un élément avec un effet de repli
     * @param {HTMLElement} element
     * @param {Number} duration
     */

    static slideUp (element, duration = 500) {
        element.style.height = element.offsetHeight + 'px'
        element.style.transitionDuration = `${duration}ms`
        element.style.transitionProperty = 'height, margin, padding'
        element.offsetHeight //redraw
        element.style.overflow = 'hidden'
        element.style.height = 0
        element.style.paddingTop = 0
        element.style.paddingBottom = 0
        element.style.marginTop = 0
        element.style.marginBottom = 0
        window.setTimeout(() => {
            element.style.display = "none"
            element.style.removeProperty('height')
            element.style.removeProperty('padding-top')
            element.style.removeProperty('padding-bottom')
            element.style.removeProperty('margin-top')
            element.style.removeProperty('margin-bottom')
            element.style.removeProperty('overflow')
            element.style.removeProperty('transition-duration')
            element.style.removeProperty('transition-property')
        }, duration)
    }

    /**
     * Affiche un élément avec un effet de repli
     * @param {HTMLElement} element
     * @param {Number} duration
     */
    static slideDown(element, duration = 500 ) {
        element.style.removeProperty('display')
        element.style.display = window.getComputedStyle(element).display === 'none' ? 'block' : window.getComputedStyle(element).display
        let height = element.offsetHeight
        element.style.overflow = 'hidden'
        element.style.height = 0
        element.style.paddingTop = 0
        element.style.paddingBottom = 0
        element.style.marginTop = 0
        element.style.marginBottom = 0
        element.offsetHeight // redraw
        element.style.transitionDuration = `${duration}ms`
        element.style.transitionProperty = 'height, margin, padding'
        element.style.height = height + 'px'
        element.style.removeProperty('padding-top')
        element.style.removeProperty('padding-bottom')
        element.style.removeProperty('margin-top')
        element.style.removeProperty('margin-bottom')
        window.setTimeout(() => {
        element.style.removeProperty('height')
        element.style.removeProperty('overflow')
        element.style.removeProperty('transition-duration')
        element.style.removeProperty('transition-property')
        }, duration)
    }

    /**
     * Affiche / Masque un élément avec un effet de repli
     * @param {HTMLElement} element
     * @param {Number} duration
     */
    static slideToggle (element, duration = 500) {
        let display = window.getComputedStyle(element).display
        if (display === 'none') {
            this.slideDown(element, duration)
        } else {
            this.slideUp(element, duration)
        }
    }

    /**
     * Fonction qui initialise le module si on veut une utilisation semblable à jQuery
     */
    static init () {
        let anim = this
        /**
         * Cacher cet élément avec un effet de repli
         * @param {Number} duration Durée de l'animation
         */
        HTMLElement.prototype.slideUp = function(duration = 500) {
            anim.slideUp(this, duration)
        }
        /**
         * Afficher cet élément avec un effet de repli
         * @param {Number} duration Durée de l'animation
         */
        HTMLElement.prototype.slideDown = function(duration = 500) {
            anim.slideDown(this, duration)
        }
        /**
         * Afficher cet élément avec un effet de repli
         * @param {Number} duration Durée de l'animation
         */
        HTMLElement.prototype.slideToggle = function(duration = 500) {
            anim.slideToggle(this, duration)
        }
    }
}

module.exports = DOMAnimations