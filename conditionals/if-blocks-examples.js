if (true) {
  console.log("this prints because the conditional is true");
}

if (false) {
  console.log("doesn't print because its false");
}

if (false) {
  console.log("doesn't print because false");
} else {
  console.log("else prints as a last resort, after all others fail");
}

if (false) {
  console.log("nope");
} else if (false) {
  console.log("nope");
} else if (false) {
  console.log("also no");
} else {
  console.log("finally. this one works");
}

if (false || false || true || false) {
  console.log(
    "only one has to be true, so this prints because there is a true."
  );
}

if (false || false || false) {
  console.log("This does not print. everything is false");
} else {
  console.log("You should understand this by now. last resort print.");
}

if (true && true) {
  console.log("&& means BOTH have to be true");
}

if (false && true) {
  console.log("nope");
}

if (true && (true || false) && true) {
  console.log(
    "this is nasty, but you can combine things and group with parenthesis"
  );
}

if (!false) {
  console.log(
    "! is the NOT operator. It flips the boolean. so this can be read is 'if NOT false'.  Make sure you name variables so this reads nicely. "
  );
}

if (undefined || NaN || "" || 0 || !true) {
  console.log("undefined is false?");
} else {
  console.log(
    "Undefined and NaN and empty strings and 0 and !true ALL evaluate to false"
  );
}

if (46 > 8) console.log("Single line statement no curlies needed");
