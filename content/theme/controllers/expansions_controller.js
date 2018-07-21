// Page model queries
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");
// GET media model
const FindAllMedia = require("../../../important/admin/adminModels/queries/media/FindAllMedia");
const findMediaWithParam = require("../../../important/admin/adminModels/queries/media/FindAllMediaWithParam");
module.exports={
    index(req, res, next) {
        const AnyPage = FindPageWithParam({ slug: "expansions" });
        const allMedia = FindAllMedia();
        Promise.all([AnyPage, allMedia]).then(result => {
          if (result[0].length < 1) {
            res.redirect("/");
          } else {
            res.render("expansions/index", {
              title: result[0][0].title,
              content: result[0][0].content,
              keywords: result[0][0].keywords,
              description: result[0][0].description,
              author: result[0][0].author,
              media: result[1]
            });
          }
        });
      } // end of any page function
    };
    