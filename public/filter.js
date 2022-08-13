function deletefun() {
  const trash = document.querySelector("button.deleteThisIssue");
  const endpoint = `/delete/${trash.dataset.doc}`;
  fetch(endpoint, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      window.location.href = data.redirect;
    })
    .catch((e) => console.log(e));
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
