/*
* Location API
Get user reverse location with latitude and longitude.
*/

export class LocationAPI{
    constructor() {
        this.BASE_URL = 'https://api.bigdatacloud.net/data'
    }
    getReverseLocation(latitude, longitude) {
        const geoUrl = `${this.BASE_URL}/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`
        return fetch(geoUrl).then((data) => data.json())
    }
}