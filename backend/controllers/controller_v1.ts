import 'dotenv/config';
const axios = require('axios').default;

const yelpSearch = async (
    latitude: number = 38.985,
    longitude: number = -77.095, 
    sort_by: string = 'review_count'
    ) => {
    const API_KEY = process.env.API_KEY
    const URL = `https://api.yelp.com/v3/businesses/search?open_now=true&categories=restaurant&latitude=${latitude}&longitude=${longitude}&sort_by=${sort_by}`
    const response = await axios({
        url: URL,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        }
    }).then(function (responseData: any) {
        console.log(responseData.data)
        return responseData?.data
    })
}


const health = (req: any, res: any) => {
    res.send("API is working")
}


const search = async (req: any, res: any) => {
    const searchData = await yelpSearch()
    console.log(searchData)
    res.send(searchData)
}

export { search, health }