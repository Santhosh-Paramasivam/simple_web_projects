current_question = 0;
questions = [
    'What is the correct way to create a list in Python?',
    'Which keyword is used to define a function in Python?',
    'What will be the output of print(type([]))?',
    'Who created Python?'];
number_of_questions = questions.length;
options = [
    ['list = (1,2,3)','list =[1,2,3]','list = {1,2,3}','list = <1,2,3>'],
    ['function','def','func','define'],
    ["<class 'list'>","<class 'dict'>","<class 'tuple'>","<class 'set'>"],
    ['Charles Darwin', 'Dennis Ritchie', 'Guido Van Rossum','Elon Musk']];
answers = ['list =[1,2,3]','def',"<class 'list'>",'Guido Van Rossum'];
function check(button_clicked)
{
    console.log(options[current_question][button_clicked]);
    if(options[current_question][button_clicked] == answers[current_question])
    {
        console.log('correct answer');
        current_question +=1;
        if(current_question >= number_of_questions)
        {
            document.body.innerHTML = '<h1 id="title">Congrats! You won!</h1>';
        }
        else
        {
        document.getElementById('question').innerText = questions[current_question];
        document.getElementById('top-left').innerText = options[current_question][0];
        document.getElementById('top-right').innerText = options[current_question][1];
        document.getElementById('bottom-left').innerText = options[current_question][2];
        document.getElementById('bottom-right').innerText = options[current_question][3];
        }
    }
    else
    {
        switch(button_clicked)
        {
            case 0:
                document.getElementById('top-left').innerText = "Wrong answer!";
                break;
            case 1:
                document.getElementById('top-right').innerText = "Wrong answer!";
                break;
            case 2:
                document.getElementById('bottom-left').innerText = "Wrong answer!";
                break;
            case 3:
                document.getElementById('bottom-right').innerText = "Wrong answer!";
                break;
        }
    } 
}

function setup()
{
    document.getElementById('question').innerText = questions[0];
    document.getElementById('top-left').innerText = options[0][0];
    document.getElementById('top-right').innerText = options[0][1];
    document.getElementById('bottom-left').innerText = options[0][2];
    document.getElementById('bottom-right').innerText = options[0][3];
}