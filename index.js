function myFunction() {
  var url = "https://api.example.com/get-game";
  var response = UrlFetchApp.fetch(url);
  var data = response.getContentText();
  Logger.log(data);
}
