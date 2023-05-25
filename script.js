const connectDB = require("./config/db");
const File = require("./models/file");
const fs = require("fs");

connectDB();

async function deleteData() {
  const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const file = await File.find({ createdAt: { $lt: pastDate } });
  if (file.length) {
    for (const file of files) {
      try {
        fs.unlinkSync(file.path);
        await file.remove();
        console.log(`successfully deleted ${file.filename}`);
      } catch (error) {
        console.log(`Error while deleting file ${error}`);
      }
    }
    console.log(`job done !`);
  }
}

deleteData().then(process.exit);
