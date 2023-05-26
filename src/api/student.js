const key = "students";
const keyProfile = "profile";
export const getStudents = () => {
    checkAppointments();
    const items = localStorage.getItem(key);
    return items;
}

export const saveStudent = (body) => {
    checkStudents();
    const items = localStorage.getItem(key);
    items.push(body)
    localStorage.setItem(key, body)
    return items;
}


export const loginStudent = (email, password) => {
    const items = localStorage.getItem(key);
    const item = items.find((student) => student.email === email && student.password === password)
    if(item) {
        localStorage.setItem(keyProfile, {
            type: "student",
            id: item.id
        })
        return true;
    }
    return false;
}


export const getStudentById = (id) => {
    checkStudents();
    const items = localStorage.getItem(key);
    return items.findIndex(id);
}



const checkStudents = () => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key,[]);
    }
 }