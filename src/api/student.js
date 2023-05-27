const key = "students";
const keyProfile = "profile";

const getStudents = () => {
    checkStudents();
    const items = localStorage.getItem(key);
    return items;
}

const saveStudent = (body) => {
    checkStudents();
    const items = localStorage.getItem(key);
    items.push(body)
    localStorage.setItem(key, body)
    return items;
}

const loginStudent = (email, password) => {
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


const getStudentById = (id) => {
    checkStudents();
    const items = localStorage.getItem(key);
    return items.findIndex(id);
}



const checkStudents = () => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key,[]);
    }
 }

 export default {getStudents, saveStudent, loginStudent, getStudentById, checkStudents}