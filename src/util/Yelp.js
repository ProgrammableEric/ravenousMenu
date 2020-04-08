const apiKey = "TMAGhXqzl69fAAEQNpZW-JxU7Mn8xibnrtJ-HF4A0DhW-b2zda07Jy7NNow2E-ZrwlLazPKpzUDx2yBbMnhnvXeFlfXpCBvMHi7-mneQwZAyfTlw-F0p_-G26_L5XXYx";
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then( response => {
            return response.json();
        }).then( jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map( (business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }; 

                });
            } else {
                
            }
        })
    }
};

export default Yelp;