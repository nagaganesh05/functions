// 1 Show a Simple Message in the Console
function showMessage(){
    console.log("Hello Welcome to the Website!");
}
showMessage()


// 2  Count from 1 to 10s


function countToTen(){
    for(i=1;i<=10;i++){
        console.log(i);
    }
}
countToTen()


// 3 Display Multiplication Table for Number 2
function multiplicationTable(a){
    for(i=1;i<=10;i++){
        result = a*i;
        console.log(`${a}*${i}=${result}`);
    }
}
multiplicationTable(2)


// 4  Display Odd Numbers from 1 to 10

function showOddNumbers(){
    for(i=1;i<=10;i++){
        if(!(i%2==0)){
            console.log(i)
        }
    }
}
showOddNumbers()


// 5 Count Down from 5 to 1


function countDown(){
    for(i=5;i>=1;i--){
        console.log(i);
    }
}
countDown()

// 6 Print a Greeting for the User


function greetUser(){
    console.log("Good day,user!");
}
greetUser()


// 7 List Even Numbers from 1 to 10


function showEvenNumbers(){
    for(i=1;i<=10;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
showEvenNumbers()


// 8  Display a Farewell Message


function farewellMessage(){
    console.log("Thank you for visiting,goodbye!")
}
farewellMessage()



// 9 Display Squares of Numbers from 1 to 5


function showSquares(){
    for(i=1;i<=5;i++){
        square = i*i;
        console.log(`square of ${i} is ${square}`)
    }
}
showSquares()


// 10 Show a Welcome Message Three Times



function repeatWelcome(a){
    for(i=1;i<=3;i++){
        console.log(a);
    }
}
repeatWelcome("Welcome!")