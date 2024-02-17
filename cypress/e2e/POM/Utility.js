/// <reference types="Cypress" /> 

/**
 * @class
 * @description This is a Utility class with all utility function.
 */
class Utility {
    /**
   * @member {object}
   * @description Store generated unique val for future use
   */
    dataShare = {};

    /**
   * @method
   * @description Compose id for navigator bar items.
   * @param {string} idVal - One component of selector id.
   * @returns {string} - Id selector of nav bar item.
   */
    composeIdForNavItem(idVal) {
        return "#nav-" + idVal.toLowerCase();
    }

    /**
   * @method
   * @description Compose id for error items.
   * @param {string} idVal - One component of selector id.
   * @returns {string} - Id selector of error items.
   */
    composeIdForErr(idVal) {
        return "#" + idVal.toLowerCase() + "-err";
    }

    /**
   * @method
   * @description Compose id for input.
   * @param {string} idVal - One component of selector id.
   * @returns {string} - Id selector of input.
   */
    composeIdForInput(idVal) {
        return '#' + idVal.toLowerCase();
    }

    /**
   * @method
   * @description Generate unique value
   * @param {string} name - Original name value.
   * @returns {string} - Original val prefixed with some random string.
   */
    generateUniqueString(name) {
        let randomPrefix = Math.random().toString(36).substring(2, 7);
        this.dataShare[name] = randomPrefix + "-" + name;
        return this.dataShare[name];
    }

    /**
  * @method
  * @description Replace subString dataShare[key] with stored value in dataShare indexed by key or with key itself if key doesn't exist in dataShare
  * @param {string} input - Original input string.
  * @returns {string} - Parsed string.
  */
    parseDataShareVal(input) {
        return input.replace(/dataShare\[(.+?)\]/gi, (match, $1) => {
            return (this.dataShare[$1] ?? $1);
        });
    }
}

export default new Utility();