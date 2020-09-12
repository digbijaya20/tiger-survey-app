import React, { useState, Fragment } from 'react';


const Survey = (props) => {
    const [surveyType, setSurveyType] = useState("defaultValue");
    const [options, setOptions] = useState([{ value: "", id: Date.now() }])
    const [questions, setQuestions] = useState("")



    const onAddItem = () => {
        if (surveyType === 'single' && options.length === 2) return;
        if (surveyType === 'multi' && options.length === 4) return;

        setOptions([...options, { value: "", id: Date.now() }]);

    }
    const onAddAnswer = (text, id) => {
        const optionsCopy = [...options];
        const updatedOptions = optionsCopy.map((option) => {
            if (option.id === id) {
                return { ...option, value: text }
            } else {
                return option;
            }
        });
        setOptions(updatedOptions);
    }
    /*
    const onchangeData = (evt) => {
        setChangeData([{ value: evt.target.value }])
    }*/

    const onRemoveItem = (id) => {
        const updatedOptions = options.filter(option => option.id !== id);
        setOptions(updatedOptions);
    }



    return (
        <Fragment>
            <div className="question-type-container" >
                <select name="survey"
                    value={surveyType} onChange={(evt) => {
                        setSurveyType(evt.target.value);
                        setOptions([{ value: "", id: Date.now() }]);
                        
                    }}
                >
                    <option value="defaultValue" >Select Qustion Type</option>
                    <option value="multi" > Multi Select </option>
                    <option value="single" > Single Select </option>
                </select>

            </div>
            {surveyType !== 'defaultValue' ? (
                <div className="survey-container">
                    <input type="text" placeholder="Enter your question here" className="question-container"
                        style={{ width: "400px", padding: "5px", }}
                        value={props.questions}
                        onChange={(evt) =>
                            setQuestions(evt.target.value)}


                    />
                    <p>Options</p>
                    {options.map((option) => (
                        <div className="answer-container" style={{ width: "400px" }} >
                            <input type="text" placeholder="Type answer here" key={option.id}
                                value={option.value}
                                onChange={(evt) => { 
                                    onAddAnswer(evt.target.value, option.id) }}
                                style={{ width: "350px", padding: "15px", height: "16px", marginBottom: "15px" }}
                            />

                            <p onClick={onAddItem} >➕</p>

                            <p onClick={() => {
                                onRemoveItem(option.id)
                            }} >➖</p>
                        </div>

                    ))}
                    {(surveyType === 'multi' && options.length >= 4) ||
                        (surveyType === 'single' && options.length === 2) ? (
                            //add or publish container
                            <div className="add-publish-container">
                                <button>Add Question</button>
                                <button>Publish</button>
                            </div>) : null}
                </div>


            ) : null}


        </Fragment>
    );
}

export default Survey;