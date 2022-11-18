// Finds the case that matches the expression in "switch"
// stops when it reaches a "break".
let favSeason = "Summer";

switch (favSeason) {
  case "Winter":
    console.log("Wow what a dumb season to like. its so cold");
    break;
  case "Fall":
    console.log("Leaves everywhere");
    break;
  case "Summer":
    console.log("Too hot bro.");
    break;
  case "Spring":
    console.log("hm.. what is even the point of spring?");
    break;
  default:
    console.log("something is wrong with your input");
}

favSeason = "Winter";
// because winter is at the top, and there's no "break", it finds the first match (Winter, at the top) and runs through all the cases

switch (favSeason) {
  case "Winter":
    console.log("Wow what a dumb season to like. its so cold");
  case "Fall":
    console.log("Leaves everywhere");
  case "Summer":
    console.log("Too hot bro.");
  case "Spring":
    console.log("hm.. what is even the point of spring?");
  default:
    console.log("something is wrong with your input");
}

favSeason = "Fall";
// Skips Winter because it doesnt match. Starts at Fall, and runs the code in the Fall block, and in the Summer block below Fall.
// Doesn't print anything after the Summer block because of the "break".
switch (favSeason) {
  case "Winter":
    console.log("Wow what a dumb season to like. its so cold");
  case "Fall":
    console.log("Leaves everywhere");
  case "Summer":
    console.log("Too hot bro.");
    break;
  case "Spring":
    console.log("hm.. what is even the point of spring?");
  default:
    console.log("something is wrong with your input");
}
