const apiKey = "AIzaSyDPmDFRL1kx6_1-yJ832fnXHcDzw4-ETxc";

const GMap = {
    autoComplete(term) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${term}&types=geocode&key=${apiKey}`).then(
            response => {
                return response.json();
            }
        ).then(
            jsonResponse => {
                if (jsonResponse.predictions){
                    return jsonResponse.predictions.map( (prediction) => {
                        console.log('description: ', prediction.description, '\n');
                        console.log('id: ', prediction.id);
                        return {
                            id: prediction.id,
                            description: prediction.description 
                        };
                    }); 
                } else {
                    return '';
                }
            })     
    }
}

export default GMap;