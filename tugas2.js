var Input = ["Ryan", "Kieran", "Jason", "Yous"];

function friend(friends){
 
  output = [];
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      output.push(friends[i]);
    }

  };
  return output;
}

var myfriend = friend(Input);

console.log(myfriend);