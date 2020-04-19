import axios from "axios";

const url = "http://127.0.0.1:8000/api/notes/";
export const fetchNotes = async () => {
    return axios.get(url)
        .then(res => { return res.data })
        .catch(err => console.log(err));
}

export const fetchNote = (id) => {
    return fetch(`${url + id}`, {}).then(res => res.json()).then(data => { return data });
}

export const addNote = (data) => {
    axios.post(url, data).then(daa => { return data })
}

export const updateNote = (data) => {
    axios.put(`http://127.0.0.1:8000/api/notes/${data.id}`, data)
        .then(console.log(data))
    return;
}