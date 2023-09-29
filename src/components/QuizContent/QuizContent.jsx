import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import shuffleArray from '../../utils/shuffleArray';

export default function QuizContent() {
    const [lsChoose, setLsChoose] = useState([])
    const [lsQuestion, setLsQuestion] = useState([])
    const [selectAnswer, setSelectedAnswers] = useState({})

    const quiz = useSelector(state => state.home.quiz)
    const nav = useNavigate()

    useEffect(() => {
        setLsQuestion(quiz.map((questionData) => ({
            ...questionData,
            allAnswers: shuffleArray([questionData.correct_answer, ...questionData.incorrect_answers]),
        })))
    }, [quiz])

    const HandleClick = (items, answer, index) => {
        const existingAnswer = lsChoose.find((it) => it.question === items.question)
        if (existingAnswer) {
            const updatedAnswers = lsChoose.map((it) =>
                it.question === items.question ? { ...it, answer } : it
            )
            setLsChoose(updatedAnswers)
        } else {
            setLsChoose([...lsChoose, { question: items.question, answer }])
        }
        setSelectedAnswers((pre) => ({
            ...pre,
            [index]: answer,
        }))
    }

    return (
        <div className='quiz flex flex-col gap-10 mt-10 items-center'>
            <div className='quiz__content'>

                {lsQuestion?.map((items, index) => (
                    <div className='quiz__question' key={index}>
                        <p className='quiz__question--title'>{items.question}</p>
                        <ul className='quiz__question--answer flex mt-5'>
                            {items.allAnswers.map((answer, i) => (
                                <li className='mr-2' key={i}>
                                    <button
                                        className={`border px-4 rounded-lg border-green-600 text-green-600 p-1 hover:bg-green-500 hover:text-white active:bg-black ${selectAnswer[index] === answer ? 'bg-green-500 text-white' : ''}`}
                                        onClick={() => HandleClick(items, answer, index)}
                                    >{answer}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {lsChoose.length === 5 && < div className='quiz__button'>
                    <button
                        className='quiz__button--submit border text-center rounded-lg text-white w-full p-2 mt-10 bg-slate-500'
                        onClick={() => nav('/result', { state: { lsQuestion, lsChoose } })}
                    >Submit</button>
                </div>}

            </div>
        </div >
    )
}
