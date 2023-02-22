const harfarr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const goodword = "fubswrorjblvhalwlqjdqgixq";
const badword =
  "fubswrorjblvkhdybpdwkhpdwlfvhvshfldoobqxpehuwkhrubglvfuhwhpdwkhpdwlfvdqgsuredelolwb";
const newword = [];
for (var i = 0; i < badword.length; i++) {
  let temp = harfarr.indexOf(badword[i]);
  if (temp - 3 < 0) newword.push(harfarr[harfarr.length + (temp - 3)]);
  else newword.push(harfarr[temp - 3]);
}
console.log(newword);
