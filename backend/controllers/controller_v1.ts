import 'dotenv/config';
const axios = require('axios').default;

const yelpSearch = async (
    sort_by: string = 'review_count',
    latitude: number = 38.985,
    longitude: number = -77.095 
    ) => {
    const API_KEY = process.env.API_KEY
    const URL = `https://api.yelp.com/v3/businesses/search?open_now=true&categories=restaurant&latitude=${latitude}&longitude=${longitude}&sort_by=${sort_by}`
    return await axios({
        url: URL,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        }
    })
}

const health = (req: any, res: any) => {
    res.send("API is working")
}

const search = async (req: any, res: any) => {
    let sort_by = req.query.sort_by;
    const searchData = await yelpSearch(sort_by)
    console.log(searchData?.data)
    res.send(searchData?.data)
}

export { search, health }
