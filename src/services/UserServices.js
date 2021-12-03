const API_URL = "https://stock-system-backend.herokuapp.com/api/users/";

export const getUsers = async () => {
  return await fetch(API_URL);
};

export const getUserData = async (userId) => {
  return await fetch(`${API_URL}${userId}`)
}

export const updateUser = async (userId, user) => {
  return await fetch(`${API_URL}${userId}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
        "name":String(user.name).trim(),
        "lastName":String(user.lastName).trim(),
        "userType":String(user.userType).trim(),
        "store":String(user.store).trim(),
        "date":String(user.date).trim(),
    })
  })
}

export const addUser = async (user) => {
  return await fetch(API_URL,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      "name":String(user.name).trim(),
      "lastName":String(user.lastName).trim(),
      "userType":String(user.userType).trim(),
      "store":String(user.store).trim(),
      "date":String(user.date).trim(),
    })
  })
}

export const deleteUser = async (userId) => {
  return await fetch(`${API_URL}${userId}`, {
    method: "DELETE"
  })
}