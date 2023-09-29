import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_CATEGORY, GET_QUIZ } from '../../redux/actions/actHome'

export default function QuizSelect() {
    const [cate, setCate] = useState()
    const [level, setLevel] = useState()
    const dispatch = useDispatch()
    const cateGlobal = useSelector(state => state.home.category)

    useEffect(() => {
        cateGlobal.length === 0 && dispatch({ type: GET_CATEGORY })
    }, [])

    const HandleCreate = () => {
        if (cate && level) {
            dispatch({ type: GET_QUIZ, payload: { cate, level } })
        } else {
            alert('Select choose')
        }
    }

    return (
        <div className='quiz__select'>
            <h2 className='quiz__select--title uppercase text-center p-4 font-bold text-2xl'>quiz marker</h2>
            <div className='quiz__select--content flex justify-center gap-3'>
                <select
                    className='w-1/3 border outline-none'
                    id='categorySelect'
                    onChange={(e) => setCate(e.target.value)}
                >
                    <option hidden>Select category</option>
                    {
                        cateGlobal?.map(items => (
                            <option value={items.id} key={items.id}>{items.name}</option>
                        ))
                    }
                </select>
                <select
                    className='w-1/3 border outline-none'
                    id='difficultySelect'
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option hidden>Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button
                    className='border rounded-lg p-1 px-3 bg-slate-500 text-white'
                    id='createBtn'
                    onClick={HandleCreate}
                >Create</button>
            </div>
        </div>
    )
}
