const btnTask = document.querySelector('.newTask');
const radImportant = document.querySelector('#radImportant')
const important = document.querySelector('#important');
const radNecessary = document.querySelector('#radNecessary')
const necessary = document.querySelector('#lessImportant');
const submitBtn = document.querySelector('.submitBtn');
const input = document.querySelector('#detail');
const popup = document.querySelector('#popup');
const addNewTask = document.querySelector('#addNewTask');
const cross = document.querySelector('#cross');

addNewTask.addEventListener('click', function (e) {
    e.preventDefault();
    const popup = document.querySelector('.popupText');
    popup.classList.toggle('show');
})

submitBtn.addEventListener('mouseleave', function () {
    const popup = document.querySelector('.popupText');
    popup.classList.remove('show');
})

submitBtn.addEventListener('click', function (e) {
    if (radImportant.checked) {
        e.preventDefault();
        const text = input.value;
        const newLi = document.createElement('LI');
        newLi.innerText = text;
        important.append(newLi);
    }
});

submitBtn.addEventListener('click', function (e) {
    if (radNecessary.checked) {
        e.preventDefault();
        const text = input.value;
        const newLi = document.createElement('LI');
        newLi.innerText = text;
        necessary.append(newLi);
    }
});


important.addEventListener('click', function (e) {
    const remove = e.target.nodeName === "LI" && e.target.remove();
    const completeTask = document.querySelector('#contentList');
    const completeLi = document.createElement('LI');
    completeLi.append(e.target);
    completeTask.append(completeLi);
    return completeTask;
});


necessary.addEventListener('click', function (e) {
    const remove = e.target.nodeName === "LI" && e.target.remove();
    const completeTask = document.querySelector('#contentList');
    const completeLi = document.createElement('LI');
    completeLi.append(e.target);
    completeTask.append(completeLi);
    return completeTask;
});