export const getStorage = storage => {
    if (storage === 'id') return localStorage.getItem(storage)
    return JSON.parse(localStorage.getItem(storage))
}

export const setUserId = id => localStorage.setItem('id', id) 

export const setUserInStorage = (storage, value) => localStorage.setItem(storage, JSON.stringify([ ...value ]))

export const updateStorage = (users, myUser, login) => {
    const myVerifyUserIdx = users.findIndex(user => user.id === myUser.id)
    users.splice(myVerifyUserIdx, 1)
    if (login) myUser.isLogin = login
    users.push(myUser)
    setUserInStorage('users', users)
}