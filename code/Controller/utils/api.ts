import {Buttons} from "../data/buttons";

const getStatus = async () => {
    try {
        return await fetch(`http://10.0.2.2:8080/alert`);
    } catch (e) {
        console.log(e);
    }
}

const setStatus = async (alert: Buttons, drill: boolean) => {
    try {
        const requestOptions = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                alertType: alert,
                drill: drill
            })
        };
        return await fetch("http://10.0.2.2:8080/set", requestOptions);
    } catch (e) {
        console.log(e);
    }
}

const setCustom = async (message: String) => {
    try {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                message: message
            })
        };
        return await fetch("http://10.0.2.2:8080/custom", requestOptions);
    } catch (e) {
        console.log(e);
    }
}

export {getStatus, setStatus, setCustom};