import {Buttons} from '../data/buttons';

const address = '192.168.0.101:8000';

const getStatus = async () => {
  try {
    return await fetch(`http://${address}/`);
  } catch (e) {
    console.log(e);
  }
};

const setStatus = async (alert: Buttons, drill: boolean) => {
  try {
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        alertType: alert,
        drill: drill,
      }),
    };
    return await fetch(`http://${address}/`, requestOptions);
  } catch (e) {
    console.log(e);
  }
};

const setCustom = async (message: String) => {
  try {
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: message,
      }),
    };
    return await fetch(`http://${address}/custom`, requestOptions);
  } catch (e) {
    console.log(e);
  }
};

export {getStatus, setStatus, setCustom};
