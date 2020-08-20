import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.9:3333',
});

export default api;


/*
 iOS com emulador: localhost
 iOS com físico: IP da máquina
 Android com Emulador: localhost (adb reverse)
 Android com Emulador: 10.0.2.2 (Android Studio)
 Android com Emulador: 10.0.3.2 (Genymotion)
 Android com físico: IP da máquina

 reservei no modem/roteador o ip para a máquina
 192.168.15.9
*/
