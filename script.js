function calculate() {
  const car = document.getElementById("car").value;
  let result = "";
  switch (car) {
    case "A":
      result = "48,552";
      break;
    case "B":
      result = "39,978";
      break;
    case "C":
      result = "50,260";
      break;
    case "D":
      result = "41,445";
      break;
    case "E":
      result = "69,778";
      break;
    case "F":
      result = "57,051";
      break;
    case "G":
      result = "1171,663";
      break;
    case "H":
      result = "58,947";
      break;
    case "I":
      result = "79,048";
      break;
    case "J":
      result = "66,174";
      break;
    case "K":
      result = "52,902";
      break;
    default:
      result = "エラーが発生しました。";
  }
  document.getElementById("result").textContent = `月額: ${result}円`;
}
