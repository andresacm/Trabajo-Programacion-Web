const key = "teachers"
const keyProfile = "profile";

const getTeachers = () => {
    checkTeachers();
    const items = localStorage.getItem(key);
    return items;
}
const saveTeacher = (body) => {
    checkTeachers();
    const items = localStorage.getItem(key);
    items.push(body)
    localStorage.setItem(key, body)
    return items;
}

const loginTeacher = (email, password) => {
    const items = localStorage.getItem(key);
    const item = items.find((teacher) => teacher.email === email && teacher.password === password)
    if(item) {
        localStorage.setItem(keyProfile, {
            type: "teacher",
            id: item.id
        })
        return true;
    }
    return false;
}

const getTeacherById = (id) => {
    checkTeachers();
    const items = localStorage.getItem(key);
    return items.findIndex(id);
}

const checkTeachers = () => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key,[]);
    }
 }

 export default {getTeachers, saveTeacher, loginTeacher, getTeacherById, checkTeachers}