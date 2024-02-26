import { Component, OnInit } from '@angular/core';
import { Question, Results } from 'src/utils/types';
import  questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})


export class QuizzComponent implements OnInit {
  title: string = ''
  questions: Question[] = []
  selectedQuestion: Question = {} as Question
  answers: string[] = []
  selectedAnswer: string = ''
  questionIndex: number = 0
  maxIndex: number = 0
  finished: boolean = false

  constructor() { }

  ngOnInit(): void {
    if (questions) {
      this.title = questions.title
      this.questions = questions.questions
      this.selectedQuestion = this.questions[this.questionIndex]

      this.maxIndex = this.questions.length
    }
  }

  playerChoose(answer: string) {
    this.answers.push(answer)
    this.nextStep()
  }

  nextStep() {
    this.questionIndex += 1
    if (this.questionIndex < this.maxIndex) {
      this.selectedQuestion = this.questions[this.questionIndex]
    } else {
      const finalAnswer = this.checkResult(this.answers)
      this.selectedAnswer = questions.results[finalAnswer as keyof Results]
      this.finished = true
    }
  }

  checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, _index, arr) => {
      if (
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ) {
        return previous
      }
      return current
    }, '');
    return result
  }

}
