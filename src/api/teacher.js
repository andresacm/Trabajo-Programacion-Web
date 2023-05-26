const key = "teachers"
const keyProfile = "profile";
export const getTeachers = () => {
    checkAppointments();
    const items = localStorage.getItem(key);
    return items;
}

export const saveTeacher = (body) => {
    checkTeachers();
    const items = localStorage.getItem(key);
    items.push(body)
    localStorage.setItem(key, body)
    return items;
}


export const loginTeacher = (email, password) => {
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


export const getTeacherById = (id) => {
    checkTeachers();
    const items = localStorage.getItem(key);
    return items.findIndex(id);
}



const checkTeachers = () => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key,[]);
    }
 }