function friend(friends){
  let trueFriends = []
  for(var i = 0; i < friends.length; i++){
    if(friends[i].length == 4){
    trueFriends.push(friends[i])
    }
  }
  return trueFriends
}
