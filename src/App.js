
import './App.css';
import Quiz from './Quiz';
import React from "react"
import right from './right.jpg'
import wrong from './wrong.jpg'
import ready from './ready.jpg'
import love from './love.jpg'

const image = [ready, right, wrong]
const text = ["sẵn sàng nèk", "đúng gòi", "ngoo ngok"]
const quiz = {
  question: ["Em là ai?", "Mình quen nhau ngày nào?", "Ai đẹp trai nhất?","Đối với anh ai dthưn nhứt", "Anh có yêu em không?"],
  choice1: ["Người yêu anh", "Em không nhớ", "huy dâng","Như Huỳnh", "Yêu tới cùng trời cúi đất"],
  choice2: ["Bà bán hàng online", "22/12/2021", "em khum biết", "em khum biết", "em cũng khum piết lun"],
  answer: ["1", "2", "1", "1", "1"]
}
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      currentQuestion: 0,
      imgState: 0
    }
  }
  handleClick(verdict)
  {
    if (verdict)
    {
      this.setState({
        currentQuestion : this.state.currentQuestion + 1,
        imgState : 1
      })
    }
    else 
  {
    this.setState({
      imgState : 2
    })
  }
  }
  render() {
    
    if (this.state.currentQuestion < quiz.question.length)
    return (
    
    <div className="App">
    {/* <h1>
      {this.state.currentQuestion}
    </h1> */}
     <Quiz question={quiz.question[this.state.currentQuestion]} choice1={quiz.choice1[this.state.currentQuestion]}
       choice2={quiz.choice2[this.state.currentQuestion]} answer={quiz.answer[this.state.currentQuestion]} onClick={(verdict) => this.handleClick(verdict)}
     />
    <h2>{text[this.state.imgState]}</h2>
     <img className="state-img" src={image[this.state.imgState]} alt="state image" />
    </div>)
    else
    return(
      <div className="App">
        <h1>Đúng z anh yêu em gất nhều</h1>
        <img className='state-img' src={love} alt="" />
      </div>
    )
  }
}

export default App;
