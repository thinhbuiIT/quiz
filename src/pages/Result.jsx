import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Result() {
    const [lsCorrect, setLsCorrect] = useState([])
    const nav = useNavigate()
    const location = useLocation()
    const { lsQuestion, lsChoose } = location.state

    useEffect(() => {
        let c = []
        lsQuestion.forEach(question => {
            lsChoose.forEach(choose => choose.answer == question.correct_answer && c.push(choose))
        })
        setLsCorrect(c)

    }, [])

    let buttonColor = 'green';
    if (lsCorrect.length < 4) {
        buttonColor = 'yellow';
    }
    if (lsCorrect.length <= 2) {
        buttonColor = 'red';
    }

    return (
        <div className='result flex flex-col justify-center items-center'>
            <h2 className='text-center uppercase font-bold py-5 text-2xl'>Result</h2>
            <div className='container'>
                <div className='result__content '>
                    {lsQuestion?.map((items, index) => (
                        <div className='quiz__question' key={index}>
                            <p className='quiz__question--title'>{items.question}</p>
                            <ul className='quiz__question--answer flex mt-5'>
                                {items.allAnswers.map((answer, i) => {
                                    const isSelected = lsChoose.some(
                                        (userAnswer) =>
                                            userAnswer.question === items.question && userAnswer.answer === answer
                                    )
                                    const isCorrect = lsQuestion.some(
                                        (ques) =>
                                            ques.question === items.question && answer === items.correct_answer
                                    )
                                    return (
                                        <li className='mr-2' key={i}>
                                            <button
                                                className={`border px-4 rounded-lg  p-1 ${isSelected || isCorrect ? answer === items.correct_answer ? 'bg-green-600 text-white' : 'bg-red-600 text-white' : ''}`
                                                }
                                            >
                                                {answer}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                    {<div className='quiz__score'>
                        <p
                            className={`bg-${buttonColor}-600 rounded-sm p-1 mt-5 text-center`}
                        >
                            you scored {lsCorrect.length} out of {lsQuestion.length}
                        </p>
                    </div>}

                    <button
                        className='border text-center rounded-lg text-white w-full p-2 mt-10 bg-slate-500'
                        onClick={() => nav('/')}
                    >Create New Quiz</button>
                </div>
            </div>
        </div>
    )
}
