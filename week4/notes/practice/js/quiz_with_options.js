const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    response: document.querySelector('#response'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    },
    start: document.getElementById('start'),
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }

};

const game = {
    start(quiz){
        view.hide(view.start);
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },
    ask(name){
        console.log('ask() invoked');
        if(this.questions.length > 2) {
        view.shuffle(this.questions);
        this.question = this.questions.pop();
        const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
        view.shuffle(options);
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        view.render(view.response,view.buttons(options));
        }
        else {
        this.gameOver();
        }
    },
    check(event){
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        this.ask();
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);
