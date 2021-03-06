document.getElementById("passwordSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const includeNums = document.getElementById("num").checked;
  const includeSpecial = document.getElementById("special").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const passwordLength = document.getElementById("length").value;

  let url = "https://passwordinator.herokuapp.com/generate";
  let urlQueries = "";
  if (includeNums) {
    urlQueries += '?num=true';
  }
  if (includeSpecial) {
    if (urlQueries.length > 0) {
      urlQueries += '&'
    }
    else {
      urlQueries += '?'
    }
    urlQueries += 'char=true';
  }
  if (includeUppercase) {
    if (urlQueries.length > 0) {
      urlQueries += '&'
    }
    else {
      urlQueries += '?'
    }
    urlQueries += 'caps=true';
  }
  if (!isNaN(passwordLength) && passwordLength.length > 0) {
    if (urlQueries.length > 0) {
      urlQueries += '&'
    }
    else {
      urlQueries += '?'
    }
    urlQueries += 'len=' + passwordLength;
  }
  url += urlQueries;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      let results = '<div class="passwordResults">';
      results += "<h2>Your New Password: </h2>" + "<h2 class='newPassword'>" + json.data + "</h2>";
      results += "</div>";

      document.getElementsByClassName("dynamic")[0].innerHTML = results;
    });
});
