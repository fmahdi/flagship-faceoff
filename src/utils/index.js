export const getFav = () => {
    const phoneList = localStorage.getItem("favorites");
    if (phoneList) {
        return JSON.parse(phoneList);
    } else {
        return [];
    }

}

export const addFav = (phone) => {
    const favorites = getFav();
    const isExist = favorites.find(elem => elem.id === phone.id);
    if (isExist) return console.log("PHONE ADDED")
    favorites.push(phone);
    localStorage.setItem("favorites", JSON.stringify(favorites));

}
export const removeFavorite = (id) => {
    const favorites = getFav();
    const remainingFavs = favorites.filter(elem => elem.id !== id);
    localStorage.setItem("favorites", JSON.stringify(remainingFavs));
}