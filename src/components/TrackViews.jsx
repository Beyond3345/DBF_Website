import { useEffect } from 'react';
import { db } from '../firebase.config'
import { setDoc, doc, collection, addDoc } from 'firebase/firestore';
import { useCookies } from 'react-cookie'

function TrackViews() {
    /*const [cookies, setCookie] = useCookies(['name']);
    if (!cookies.id) {
        setCookie('id', ((Math.random() + 1).toString(36).substring(6)), { path: '/' });
    }

    const info = {
        timeOpened: new Date(),
        timezone:(new Date()).getTimezoneOffset()/60,
        pageon(){
            if (window.location.pathname == '/') {
                return '/home';
            }
            return window.location.pathname
        },
        referrer(){return document.referrer},
        //previousSites(){return history.length},
        browserName(){return navigator.appName},
        browserEngine(){return navigator.product},
        browserVersion1a(){return navigator.appVersion},
        browserVersion1b(){return navigator.userAgent},
        browserLanguage(){return navigator.language},
        browserPlatform(){return navigator.platform},
    };

    async function writeDB(data) {
        const dataArray = {
            ip: data.ip,
            city: data.city,
            state: data.region,
            country: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude,
            timeopened: info.timeOpened,
            timezone: info.timezone,
            pageon: info.pageon(),
            referrer: info.referrer(),
            //previousSites: info.previousSites(),
            browserName: info.browserName(),
            browserEngine: info.browserEngine(),
            browserVersion1a: info.browserVersion1a(),
            browserVersion1b: info.browserVersion1b(),
            browserLanguage: info.browserLanguage(),
            browserPlatform: info.browserPlatform(),
        }
        await setDoc(doc(db, "rawValues", info.timeOpened.getTime().toString()), dataArray);
        await setDoc(doc(db, 'By Category', 'IP Address', data.ip, info.timeOpened.getTime().toString()), dataArray);
        await setDoc(doc(db, 'By Category', 'Page on', info.pageon(), info.timeOpened.getTime().toString()), dataArray);
        await setDoc(doc(db, 'By Category', 'City', data.city, info.timeOpened.getTime().toString()), dataArray);
        await setDoc(doc(db, 'By Category', 'users', cookies.id, info.timeOpened.getTime().toString()), dataArray);
    }

    useEffect(() => {
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(data => {
                //console.log(data.ip)
                fetch('https://ipapi.co/' + data.ip + '/json/')
                    .then(response => response.json())
                    .then(data => {
                        //console.log(JSON.stringify(data, null, 1))
                        writeDB(data)
                });
        });
    },[])*/
    return (
        <></>
    )
}

export default TrackViews