import { getTeacherById } from "./teacher";
import { getStudentById } from "./student";

const key = "appointments"
export const getAppointments = (type) => {
    checkAppointments();
    let items = localStorage.getItem(key);
    if(type === "student") {
        items.map(item => {
            item.teacher =  getTeacherById(item.teacherId);
        })
    } else {
        items.map(item => {
            item.student =  getStudentById(item.studentId);
        })
    }
    return items;
}

export const saveAppointment = (body) => {
    checkAppointments();
    const items = localStorage.getItem(key);
    items.push(body)
    localStorage.setItem(key, body)
    return items;
}

export const getAppointmentByIdandSide = (id, type) => {
    checkAppointments();
    const items = localStorage.getItem(key);
    let item = items.findIndex(id);
    if(type === "student") {
        item.teacher =  getTeacherById(item.teacherId);
    } else {
        item.student =  getStudentById(item.studentId);
    }
    return item;
}



const checkAppointments = () => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key,[]);
    }
 }