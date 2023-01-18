var list = ["user", "passw0rd", "lett3r", "101", "developer"];

function findString(list) {

  var alphanumeric = 0;
  var numeric = 0;

  for (let i = 0; i < list.length; i++) {

    var listedArrayString = list[i];
    var count = 0;

    for (let j = 0; j < listedArrayString.length; j++) {

      if (+listedArrayString[j] || +listedArrayString[j] == 0) {

        count++;

        if (listedArrayString.length == count) {
          numeric++;
        }
      }
    }

    for (let j = 0; j < listedArrayString.length; j++) {

      if (+listedArrayString[j] || +listedArrayString[j] == 0) {
        alphanumeric++;
        break;
      }
    }
  }

  var alphaNumericCount =
    alphanumeric > numeric ? alphanumeric - numeric : numeric - alphanumeric;
    
  var numericCount = numeric > alphanumeric ? numeric : numeric;

  return `Count of alphanumeric String = ${alphaNumericCount} 
          Count of numeric String = ${numericCount}`;
}

var result = findString(list);
console.log(result);

//  Output :
//           Count of alphanumeric String = 2 
//           Count of numeric String = 1
