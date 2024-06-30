import axios from "axios";

export const ApiTestAxio = (callback) => {
    axios.get("https://api-blue-archive.vercel.app/api/characters").then((res) => {
        console.log(res.data)
        callback(res.data);
    })
    .catch((err) => {
        console.log(err)
    });
};