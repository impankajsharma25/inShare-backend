const File = require("../models/file");

const router = require("express").Router();

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
      return res.render("download", { error: "Link has been expired" });
    }

    return res.render("download", {
      uuid: file.uuid,
      fileName: file.filename,
      fileSize: file.size,
      downloadLink: `${process.env.APP_BASE_URl}/files/download/${file.uuid}`,
    });
  } catch (error) {
    return res.render("download", { error: "Something went wrong" });
    console.log(error);
  }
});

module.exports = router;
