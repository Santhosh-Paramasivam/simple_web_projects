function addValue(value)
{   
    document.getElementById("calculator_input").value += value;
}

function clearInput()
{
    document.getElementById("calculator_input").value = "";
}

stored_value = 0
operation = ''

function storeAndClear()
{
    stored_value = parseInt(document.getElementById("calculator_input").value);
    clearInput();
}

function add()
{
    storeAndClear();
    operation = '+';
}

function subtract()
{
    storeAndClear();
    operation = '-';
}

function multiply()
{
    storeAndClear();
    operation = '*';
}

function divide()
{
    storeAndClear();
    operation = '/';
}


function calculate()
{
    if(operation === '+')
    {
        document.getElementById("calculator_input").value = parseInt(document.getElementById("calculator_input").value) + stored_value;
    }
    else if(operation === '-')
    {
        document.getElementById("calculator_input").value = stored_value - parseInt(document.getElementById("calculator_input").value);
    }
    else if(operation === '*')
    {
        document.getElementById("calculator_input").value = stored_value * parseInt(document.getElementById("calculator_input").value);
    }
    else if(operation === '/')
    {
        document.getElementById("calculator_input").value = stored_value / parseInt(document.getElementById("calculator_input").value);
    }
}