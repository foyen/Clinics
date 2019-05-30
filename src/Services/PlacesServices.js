import { CONSTANTS } from "../utils/Constants.js";
class GooglePlacesService {
    
    constructor(apikey, options){
        this.apikey = apikey;
        this.options = options;
       
        this.service = null

        this.searchPlaces = this.searchPlaces.bind(this);
        this._buildParams = this._buildParams.bind(this);
    }
    
    

    _buildParams(placeSearchParams){
        let paramStr = Object.keys(placeSearchParams)
        .filter(k => !!placeSearchParams[k])
        .map(k => `${k}=${placeSearchParams[k]}`).join('&');

        return paramStr = `${CONSTANTS.placesApiUrl}?${paramStr}`;

    }

    searchPlaces(options){

     var  placeSearchParams = {
            input: options.input,
            inputtype: options.inputtype,
            fields: options.fields.toString(),
            key: this.apikey
            
        }
        

       let paramStr = this._buildParams(placeSearchParams)
        
        return new Promise(function(resolve, reject){
            

            
        })

    
    }

    geocode(zipCode){
        var request ={
            query:zipCode
        }
        console.log(  this.service)
        this.service.textSearch(request, function(data){
            console.log(data);
        })

    }


}

const placesService = new GooglePlacesService(CONSTANTS.apiKey, null)


export default placesService;