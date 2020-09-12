import React from "react";
import './_LandingPage.css';
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <>
            <div>
                <Link to='/create'>
                    <button className="btn">Create Survey</button>
                </Link>

            </div>

            <div> <button className="btn">Take Survey</button> </div>
        </>
    );
}

export default LandingPage;

/*
.create-survey-container {
    height: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.question-type-container {
    margin-bottom: 30px;
}

.question-container {
    width: 400px;
    padding: 5px;
}

.answer-container {
    width: 425px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.answer-container input {
    width: 350px;
    padding: 5px;
    height: 20px;
}



// Survey.js code below :
import React, { useState, Fragment } from 'react';

const Survey = (props) => {
	const [ surveyType, setSurveyType ] = useState('defaultValue');
	return (
		<Fragment>
			<div className="question-type-container">
				<select
					name="survey"
					value={surveyType}
					onChange={(evt) => {
						setSurveyType(evt.target.value);
					}}
				>
					<option value="defaultValue">Select question type</option>
					<option value="multi">Multi-select</option>
					<option value="single">Single select</option>
				</select>
			</div>
            <div className="survey-container">
                <input type="text" placeholder="Enter your question here" className="question-container" />
                <p>Options</p>
                <div className="answer-container">
                    <input type="text" placeholder="Type answer here" />
                    <p>➕</p>
                    <p>➖</p>
                </div>

            </div>
		</Fragment>
	);
};

export default Survey;

*/