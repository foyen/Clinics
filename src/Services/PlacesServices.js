import { CONSTANTS } from "../utils/Constants.js";
class GooglePlacesService {
    
    constructor(apikey, options){
        this.apikey = apikey;
        this.options = options;

        this.searchPlaces = this.searchPlaces.bind(this);
        this._buildParams = this._buildParams.bind(this);
    }
    
    

    _buildParams(){

    }

    searchPlaces(options){

     var  placeSearchParams = {
            input: options.input,
            inputtype: options.inputtype,
            fields: options.fields.toString(),
            key: this.apikey
            
        }

        let paramStr = Object.keys(placeSearchParams)
        .filter(k => !!placeSearchParams[k])
        .map(k => `${k}=${placeSearchParams[k]}`).join('&');

        paramStr = `${CONSTANTS.placesApiUrl}?${paramStr}`;
        
        return new Promise(function(resolve, reject){

            const xhr = new XMLHttpRequest();
            
            xhr.open("GET", paramStr);
            xhr.setRequestHeader("Access-Control-Request-Headers", "x-requested-with");
            console.log(paramStr)
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        })

    
    }

    geocode(){

    }


}

const placesService = new GooglePlacesService(CONSTANTS.apiKey, null)


export default placesService;