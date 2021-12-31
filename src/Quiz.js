import React from 'react'

class Quiz extends React.Component {
    handleClick(click, answer)
    {
        
        this.props.onClick(click == answer)
    }
    render(){return (
        <div className="Quiz">
            <h1>{this.props.question}</h1>
            <div className="choiceBox">
                <Choice text= {this.props.choice1} onClick={() => this.handleClick("1", this.props.answer)}/>
                <Choice text= {this.props.choice2} onClick={() => this.handleClick("2", this.props.answer)}/>
            </div>
            
        </div>
    )}
}

function Choice(props)
{
    return (
        <button onClick={props.onClick} className="Choice btn">{props.text}</button>
    )
}
export default Quiz
