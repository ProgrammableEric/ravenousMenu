const apiKey = "TMAGhXqzl69fAAEQNpZW-JxU7Mn8xibnrtJ-HF4A0DhW-b2zda07Jy7NNow2E-ZrwlLazPKpzUDx2yBbMnhnvXeFlfXpCBvMHi7-mneQwZAyfTlw-F0p_-G26_L5XXYx";
const Yelp = {
    search(term, location, sortBy, limit) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}`, {
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
                return '';
            }
        })
    }
};

export default Yelp;

/* 

term - Optional. Search term, for example "food" or "restaurants". The term may also be business names, such as "Starbucks". 
If term is not included the endpoint will default to searching across businesses from a small number of popular categories.

location - Required if either latitude or longitude is not provided. This string indicates the geographic area to be used when searching for businesses. 
Examples: "New York City", "NYC", "350 5th Ave, New York, NY 10118". Businesses returned in the response may not be strictly within the specified location.

sortBy - Optional. Suggestion to the search algorithm that the results be sorted by one of the these modes: best_match, rating, review_count or distance. 
The default is best_match. Note that specifying the sort_by is a suggestion (not strictly enforced) to Yelp's search, which considers multiple input 
parameters to return the most relevant results. For example, the rating sort is not strictly sorted by the rating value, but by an adjusted rating 
value that takes into account the number of ratings, similar to a Bayesian average. This is to prevent skewing results to businesses with a single review.

limit - Optional. Number of business results to return. By default, it will return 20. Maximum is 50.

*/


/* Response Body: 

{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
} 

*/