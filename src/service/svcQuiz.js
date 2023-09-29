import axios from "axios"

export const GetQuiz = async (params) => {
    const { cate, level } = params
    return await axios.get(`https://opentdb.com/api.php?amount=5&category=${cate}&difficulty=${level}&type=multiple`)
}