/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var webPush = require('web-push');

var pushSub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABbbHx_Wfq7NSQKEuOEcsEKmwuykFaliE_-zGBUANhkrbKQM-150xsE7cIbvE0O_uS2S1RvkSihOQ5SWPAcbY0hG7Q5CF3_WxEz4fBWIilW0HCQEvHiyvbiAWP6nG87rObu5UWJ","keys":{"auth":"Y3sg1aHF2pQWnNDrFHZstw","p256dh":"BGnjSP1YKac4kjjaEioJLjZI1OzyIx2rrGWC19254JcQftJLTay5qJ1zSUTaOGnxXr6AGDqXLEudSKgMZqMmV5I"}};

var options = {
    TTL: 60,
    gcmAPIKey: 'AAAAiiHEZlY:APA91bE_j82pR4mfSE1s3iIii1xyuTYo767ghAp0oiZyYTJSbQuiSyGgH8o9W6h2cBIXEKhROAMs0yNMx6YbmCJS0jgwXiS1jl9y5vYc4CHzO6mhufU79D8xx9_J899vNZYHeXbaqFfO'
};

var payload = 'index.html#programs';

webPush.sendNotification(pushSub, payload, options);

