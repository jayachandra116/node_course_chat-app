const users = [];

// add user
const addUser = ({ id, username, room }) => {
  //clean data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  //validate data
  if (!username || !room) {
    return { error: "Username and room are required" };
  }
  //check for existing user
  const existingUser = users.find((user) => {
    return user.room == room && user.username == username;
  });

  //validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//remove user
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//get user
const getUser = (id) => {
  return users.find((user) => user.id === id);
};
// const user=getUser(421)
// console.log(user);

//get users in room

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};
// const usersList=getUsersInRoom('vij')
// console.log(usersList);

module.exports = {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser,
};

// addUser({
//     id:22,
//     username:" JC ",
//     room:" Hyd "
// })

// addUser({
//     id:32,
//     username:"Mike",
//     room:" Hyd "
// })

// addUser({
//     id:42,
//     username:" JC ",
//     room:"Vij"
// })
