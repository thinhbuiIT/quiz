import React from 'react'
import QuizSelect from '../components/QuizSelect/QuizSelect'
import QuizContent from '../components/QuizContent/QuizContent'

export default function Home() {
    return (
        <div className='flex justify-center'>
            <div className='container'>
                <QuizSelect />
                <QuizContent />
            </div>
        </div>
    )
}
