const BlogComments = require("../../blogComments");
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
  /**
 * Finds all the blog comments in the Blog Comment collection.
 * @return {promise} A promise that resolves with all the blog comments
 */
module.exports = () => {
    return BlogComments.find({}).catch(err => {
      errorAddEvent(err, "blog comment query error");
    });
  };