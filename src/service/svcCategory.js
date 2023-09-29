import axios from "axios"

export const GetCategory = async () => {
    return await axios.get('https://opentdb.com/api_category.php')
}