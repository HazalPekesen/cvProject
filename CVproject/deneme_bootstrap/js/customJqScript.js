$(function () {
  $(document).mouseover(function () {
    let path = [
      "blue",
      "orange",
      "red",
      "green",
      "#FF8AAE",
      "#FFF89A",
      "#655D8A",
      "#FF41ED",
      "#207DFF",
      "#C9F658",
      "#EF4339",
      "#630000",
      "#D47AE8",
    ];
    $("p").css("color", path[Math.floor(Math.random() * path.length)]);
    $("a").css("color", path[Math.floor(Math.random() * path.length)]);
  });
});
