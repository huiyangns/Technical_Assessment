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
  * @description Get stored value in dataShare
  * @param {string} name - Serve as a key.
  * @returns {string} - Stored value in dataShare indexed by key.
  */
    parseDataShareVal(name) {
        return name.replace(/dataShare\[(.+?)\]/gi, (match, $1) => {
            return (this.dataShare[$1] ?? $1);
        });
    }
}

export default new Utility();