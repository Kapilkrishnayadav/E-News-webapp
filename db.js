const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://ujtdeveloper:Ujt2336@cluster0.u1kfkoy.mongodb.net/ujt"
  )
  .then(() => {
    console.log("running succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  image_url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  pubDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  source_id: {
    type: String,
    required: true,
  },
});

const sports = mongoose.model("sports", NewsSchema);
const currents = mongoose.model("currents", NewsSchema);
const technologies = mongoose.model("technologies", NewsSchema);
const breakings = mongoose.model("breakings", NewsSchema);
const politics = mongoose.model("politics", NewsSchema);
const legals = mongoose.model("legals", NewsSchema);
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use("/public", express.static(path.join(__dirname, "./client/Public")));
app.use((req, res, next) => {
  // If the request URL contains a ".html" extension, remove it
  if (req.url.endsWith(".html")) {
    req.url = req.url.slice(0, -5); // Remove the last 5 characters (".html")
  }
  next();
});

app.use(express.json());
app.use(cors());
// console.log(path.join(__dirname, "../client/index.html"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});
app.get("/dynamicCategory/:x", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dynamicCatagories.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/contact.html"));
});
app.get("/collaboration", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/collaboration.html"));
});
app.get("/Award", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/Award.html"));
});
// app.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/index.html"));
// });

app.get("/newsPage/:id", (req, res) => {
  // console.log(req.params.id);
  res.sendFile(path.join(__dirname, "./client/newsPage.html"));
});

app.get("/currents", async (req, res) => {
  const data = await currents.find();

  res.json(data);
});
app.get("/latest", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    // console.log(id);
    const doc = await mongoose.model('currents').findById(id).exec();
    if (doc) {
      console.log('Found document:', doc);
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});

app.get("/legals", async (req, res) => {
  const data = await legals.find();
  // console.log(data);

  res.json(data);
});
app.get("/legal", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    console.log(id);
    const doc = await mongoose.model('legals').findById(id).exec();
    if (doc) {
      console.log('Found document:', doc);
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});


app.get("/politics", async (req, res) => {
  const data = await politics.find();
  // console.log(data);

  res.json(data);
});
app.get("/politic", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    console.log(id);
    const doc = await mongoose.model('politics').findById(id).exec();
    if (doc) {
      console.log('Found document:', doc);
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});



app.get("/breakings", async (req, res) => {
  const data = await breakings.find();
  // console.log(data);

  res.json(data);
});
app.get("/breaking", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    console.log(id);
    const doc = await mongoose.model('breakings').findById(id).exec();
    if (doc) {
      console.log('Found document:', doc);
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});

app.get("/sports", async (req, res) => {
  const data = await sports.find();

  res.json(data);
});
app.get("/sport", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    console.log(id);
    const doc = await mongoose.model('sports').findById(id).exec();
    if (doc) {
      console.log('Found document:', doc);
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});
app.get("/tech", async (req, res) => {
  try {
    // Use the Mongoose model to search for the document
    const id=req.query.id;
    console.log(id);
    const doc = await mongoose.model('technologies').findById(id).exec();
    if (doc) {
      console.log('Found document:', doc);
      res.json(doc);
    } else {
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error searching for document:', err);
  }
  //  finally {
  //   mongoose.connection.close();
  // }

});
app.get("/technology", async (req, res) => {
  const data = await technologies.find();

  res.json(data);
});
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server started at http://localhost:" + port);
});
