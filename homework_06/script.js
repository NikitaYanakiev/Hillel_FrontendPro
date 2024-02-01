let userYearOfBirth = +prompt('Ваш год рождения');
let userCityOfResidence = prompt('Город вашего проживания');
let userFavoriteSport = prompt('Ваш любимый вид спорта');

let year = new Date().getFullYear();
let userAge = year - userYearOfBirth;
let userPLace = '';
let userSportAnswer = '';

if (userCityOfResidence === 'Киев') {
    userPLace = 'Ты живешь в столице Украины';
} else if (userCityOfResidence === 'Вашингтон') {
    userPLace = 'Ты живешь в столице США';
}
else if (userCityOfResidence === 'Лондон') {
    userPLace = 'Ты живешь в столице Англии';
} else {
    userPLace = `Ты живешь в городе ${userCityOfResidence}`;
}

if (userFavoriteSport === 'футбол') {
    userSportAnswer = "Круто! Хочешь стать как Криштиану Роналду?";
} else if (userFavoriteSport === 'тенис') {
    userSportAnswer = "Круто! Хочешь стать как Рафаэль Надаль?";
} else if (userFavoriteSport === 'бокс') {
    userSportAnswer = "Круто! Хочешь стать как Александр Усик?";
} else {
    userSportAnswer = `Круто! Хочешь достичь успеха в ${userFavoriteSport}?`;
}

if (userYearOfBirth && userCityOfResidence && userFavoriteSport) {
    alert(`    Твой возраст: ${userAge} 
    ${userPLace} 
    ${userSportAnswer}`);
} else if (!userYearOfBirth){
    alert('Жаль что вы не захотели ввести свой год рождения');
} else if (!userCityOfResidence){
    alert('Жаль что вы не захотели ввести город вашего проживания');
} else if (!userFavoriteSport){
    alert('Жаль что вы не захотели ввести ваш любимый вид спорта');
}