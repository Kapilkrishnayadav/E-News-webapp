const GetLegal = () => {
  fetch("https://e-news-tubv.onrender.com/legals")
    .then((res) => res.json())
    .then((data) => {
      var legal_imgs = document.getElementsByClassName("legal_img");
      var legal_pubDate = document.getElementsByClassName("legal_pubDate");
      var legal_title = document.getElementsByClassName("legal_title");
      console.log(legal_imgs)
      var i = 0,
        j = 0;
      for (i = 0; i < 12; i++) {
        legal_imgs[i].src = data[j].image_url;
        legal_title[i].href = "newsPage/legal_" + data[j]._id;
        legal_title[i].textContent = data[j].title;
        legal_pubDate[i].textContent = data[j].pubDate;
        j++;
        if (j == 6) j = 0;
      }
    
    })
    .catch((err) => console.error("Error: ", err));
};
GetLegal();

const GetPolitical = () => {
  fetch("https://e-news-tubv.onrender.com/politics")
    .then((res) => res.json())
    .then((data) => {
      var political_imgs = document.getElementsByClassName("political_img");
      var political_pubDate = document.getElementsByClassName("political_pubDate");
      var political_title = document.getElementsByClassName("political_title");
      console.log(political_imgs)
      var i = 0,
        j = 0;
      for (i = 0; i < 12; i++) {
        political_imgs[i].src = data[j].image_url;
        political_title[i].href = "newsPage/politic_" + data[j]._id;
        political_title[i].textContent = data[j].title;
        political_pubDate[i].textContent = data[j].pubDate;
        j++;
        if (j == 6) j = 0;
      }
    
    })
    .catch((err) => console.error("Error: ", err));
};
GetPolitical();


const GetBreakings = () => {
  fetch("https://e-news-tubv.onrender.com/breakings")
    .then((res) => res.json())
    .then((data) => {
      // console.log("kapil");
      // console.log(data)
      var images = document.getElementsByClassName("image");
      var pubDates = document.getElementsByClassName("pubDate");
      var titles = document.getElementsByClassName("title");
      var carousel_text = document.getElementsByClassName("carousel_text");
      var i = 0,
        j = 0;

      function extractFirst10Words(statement) {
        var words = statement.split(/\s+/);
        var first10Words = words.slice(0, 10);
        var result = first10Words.join(" ");
        return result;
      }

      // Example usage:

      for (i = 0; i < 7; i++) {
        images[i].src = data[j].image_url;
        titles[i].href = "newsPage/breaking_" + data[j]._id;
        pubDates[i].textContent = data[j].pubDate;
        titles[i].textContent = data[j].title;

        j++;
        if (j == 3) j = 0;
      }

      for (i = 0; i < 3; i++) {
        carousel_text[i].textContent = data[i].title;
      }
      j = 3;
      for (i = 7; i < 11; i++) {
        inputStatement = data[j].title;
        var result = extractFirst10Words(inputStatement);
        images[i].src = data[j].image_url;
        pubDates[i].textContent = data[j].pubDate;
        titles[i].href = "newsPage/breaking_" + data[j]._id;
        titles[i].textContent = result + "...";
        j++;
      }
      console.log(images[10].src);
    });
};
GetBreakings();

const GetCurrents = () => {
  // console.log("kapil");
  fetch(" https://e-news-tubv.onrender.com/currents")
    .then((res) => res.json())
    .then((data) => {
      var latest_title = document.getElementsByClassName("latest_title");
      var latest_pubDate = document.getElementsByClassName("latest_pubDate");
      var latest_imgs = document.getElementsByClassName("latest_img");

      var i = 0,
        j = 0;
      for (i = 0; i < 12; i++) {
        latest_imgs[i].src = data[j].image_url;
        latest_pubDate[i].textContent = data[j].pubDate;
        latest_title[i].href = "newsPage/latest_" + data[j]._id;
        latest_title[i].textContent = data[j].title;
        j++;
        if (j == 6) j = 0;
      }
      })
    .catch((err) => console.error("Error: ", err));
};
GetCurrents();

const GetSports = () => {
  fetch("https://e-news-tubv.onrender.com/sports")
    .then((res) => res.json())
    .then((data) => {
      var sport_imgs = document.getElementsByClassName("sport_img");
      var sport_pubDate = document.getElementsByClassName("sport_pubDate");
      var sport_title = document.getElementsByClassName("sport_title");

      var i = 0,
        j = 0;
      for (i = 0; i < 12; i++) {
        sport_imgs[i].src = data[j].image_url;
        sport_title[i].href = "newsPage/sport_" + data[j]._id;
        sport_title[i].textContent = data[j].title;
        sport_pubDate[i].textContent = data[j].pubDate;
        j++;
        if (j == 6) j = 0;
      }
    
    })
    .catch((err) => console.error("Error: ", err));
};
GetSports();

const GetTechnology = () => {
  fetch("https://e-news-tubv.onrender.com/technology")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      // Create the main div element

      var tech_imgs = document.getElementsByClassName("tech_img");

      var i = 0,
        j = 0;
      for (i = 0; i < 12; i++) {
        tech_imgs[i].src = data[j].image_url;
        j++;
        if (j == 6) j = 0;
      }
      var tech_pubDate = document.getElementsByClassName("tech_pubDate");
      // console.log(sport_pubDate);
      i = 0;
      j = 0;
      for (i = 0; i < 12; i++) {
        tech_pubDate[i].textContent = data[j].pubDate;
        j++;
        if (j == 6) j = 0;
      }
      var tech_title = document.getElementsByClassName("tech_title");
      //  console.log(sport_title);
      i = 0;
      j = 0;
      for (i = 0; i < 12; i++) {
        tech_title[i].href = "newsPage/tech_" + data[j]._id;
        tech_title[i].textContent = data[j].title;
        j++;
        if (j == 6) j = 0;
      }
    })
    .catch((err) => console.error("Error: ", err));
};
GetTechnology();
