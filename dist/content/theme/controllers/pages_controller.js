// Page model queries
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");
// GET media model
const FindAllMedia = require("../../../important/admin/adminModels/queries/media/FindAllMedia");
const findMediaWithParam = require("../../../important/admin/adminModels/queries/media/FindAllMediaWithParam");
module.exports = {
  home(req, res, next) {
    const homePage = FindPageWithParam({ slug: "home" });
    const allMedia = FindAllMedia();
    Promise.all([homePage, allMedia]).then(result => {
      if (result.length < 1) {
        res.render("../views/index", {
          title: "",
          content: "",
          keywords: "",
          description: "",
          author: ""
        });
      } else {
        res.render("../views/index", {
          title: result[0][0].title,
          content: result[0][0].content,
          keywords: result[0][0].keywords,
          description: result[0][0].description,
          author: result[0][0].author,
          media: result[1]
        });
      }
    });
  }, // end of home function

  anyPage(req, res, next) {
    let slug = req.params.slug;
    const AnyPage = FindPageWithParam({ slug: slug });
    const allMedia = FindAllMedia();
    Promise.all([AnyPage, allMedia]).then(result => {
      if (result[0].length < 1) {
        res.redirect("/");
      } else {
        res.render("index", {
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
