/*
// A1
// Initialisation

setPos(300,300);
faceDown ();
changeColor(color.red);
setLineWidth(10);

forward(200);
faceRight();
forward(100)


//A2
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);

forward(100);
faceDown()
forward(100)
faceRight()
forward(200)
faceUp()
forward(200)


// A3
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);

forward(100);
faceRight()
forward(200);
faceLeft()
forward(100);
faceUp()
forward(100);
faceDown()
forward(200);


// A4

setPos(200,500);
faceRight();
changeColor(color.green);
setLineWidth(10);

forward(100);
arcLeft(100,180)
arcRight(100,180)
forward(100);


// A5
setPos(300,100);
faceRight();
changeColor(color.purple);
setLineWidth(10);


arcRight(200,360)
arcRight(100,180)
arcLeft(100,180)


// A6

setPos(300,300);
faceUp();
changeColor(color.blue);
setLineWidth(10);

forward(50);
up()
forward(50);
down()
forward(100);



// A7

setPos(200,300);
faceDown();
changeColor(color.blue);
setLineWidth(10);

forward(100);
arcLeft(50,180)
forward(50);
up()
forward(50);
down()
forward(100);
arcLeft(50,180)
forward(50);



// A8

setPos(200,300);
faceUp();
changeColor(color.purple);
setLineWidth(10);


forward(50)
faceRight()
forward(100)
faceDown()
forward(200)
faceLeft()
forward(50)
up()
forward(50)
faceUp()
forward(50)
down()
forward(50)



// A9

setPos(200,400);
faceRight();
changeColor(color.blue);
setLineWidth(10);

forward(200)
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
faceLeft();
arcLeft(50,180);
arcRight(50,180);


// A10
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(200,180);


//A11
setPos(100,200);
faceUp();
changeColor(color.blue);
setLineWidth(10);

arcRight(50,180);
up();
faceRight();
forward(100);
down();
faceUp ();
arcRight(50,180);
faceDown();
up();
arcRight(25,180)
faceDown();
forward(50);
down();
faceDown();
changeColor(color.red);
arcRight(100,180);



// B1
setPos(100,100);
faceRight();
changeColor(color.green);
setLineWidth(10);

for (let i = 0; i < 4; i++) { 
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


// B2
setPos(50,300);
faceUp();
changeColor(color.red);
setLineWidth(10);

for (let i = 0; i < 4; i++) { 
    forward(50)
    faceRight();
    forward(50);
    faceDown();
    forward(50)
    faceRight()
    forward(50)
    faceUp()
}



// B3

setPos(200,200);
faceRight();
changeColor(color.red);
setLineWidth(10);

for (let i = 0; i<4; i++) { 
    forward(100)
    right(90)
}

 
 //B4

setPos(200,300);
faceRight();
changeColor(color.blue);
setLineWidth(10);

for (let i = 0; i<3; i++) {
    forward(100);
    left(120);
}


// B5

setPos(300,300);
faceUp();
changeColor(color.yellow);
setLineWidth(10);

forward(100)
changeColor (color.red)
for (let i = 0; i<3; i++) {
    forward(50);
    right(120);
}



//B6

setPos(150,300);

changeColor(color.red);
setLineWidth(10);

for (let i = 0; i<2; i++) {
    faceRight();
    forward(50)
    faceUp()
    forward(50)
}

changeColor(color.green)

for (let i = 0; i<3; i++) {
    faceRight();
    forward(50)
    faceDown()
    forward(50)
}



// B7

setPos(300,300)
changeColor(color.red)
setLineWidth(10)

for (let i = 0; i<4; i++) {
    forward(50);
    right(90);
}
faceLeft()
for (let i = 0; i<3; i++) {
    forward(50);
    right(120);
}


// B8

setPos(300,300)
changeColor(color.yellow)
setLineWidth(10)


for (let i = 0; i<8; i++) {
    forward(150);
    right(135);
}


//B9
setPos(200,300);
changeColor(color.red);
setLineWidth(5)

faceRight()
forward(50)
up()
forward(50)
down()

for (let i = 0; i<3; i++) {
    forward(100);
    right(120);
}



// B10

setPos(100,300)
setLineWidth(5)


changeColor(color.blue)
for (let i = 0; i<8; i++) {
    forward(100);
    right(135);
}
up()
faceDown()
forward(30)
faceRight()
forward(200)
down()

faceUp()
changeColor(color.yellow)
for (let i = 0; i<8; i++) {
    forward(200);
    right(135);
}


up()
faceDown()
forward(100)
down()

changeColor(color.red)
for (let i = 0; i<8; i++) {
    forward(100);
    right(135);
}


//B11

setPos(200,300)
changeColor(color.red)
setLineWidth(5)

faceRight()

for (let i = 0; i<8; i++) {
    forward(50)
    left(90)
    forward(50)
    right(90)
    forward(50)
    right(90)
}


//B12

setPos(300,300);
changeColor(color.red);
setLineWidth(5);

faceDown()

for (let i = 0; i<3; i++) { 
    forward(50)
    right(90)
}

faceUp()
up()
forward(50)
down()

changeColor(color.green)
for (let i = 0; i<3; i++) { 
    forward(50)
    right(90)
}



//C1

setPos(50,300)
changeColor(color.blue)
setLineWidth(5)

faceRight()

 {
    for (let i = 0; i < 3; i++) {
        forward(100);
        right(120);
    }
    forward(100);
}



//C2

setPos(200,500);
changeColor(color.fuchsia); //purple
setLineWidth(5);

faceUp();

for (let i = 0; i < 5; i++) {
    for (let i = 0; i < 4; i++) {
        forward(50);
        right(90);
    }
   
    up();
    forward(100);
    down();
}



// C3

setPos(50,300)
changeColor(color.green)
setLineWidth(5)


faceRight()
for (let i =0; i < 8; i++) {
    for (let i =0; i < 8; i++) {
        forward(100)
        left(135)
    }
    up()
    forward(200)
    down()
}



// C4

setPos(50,300)

setLineWidth(5)

faceRight()
for (let i = 0; i < 5; i++) {
    changeColor(color.red)
    for (let j = 0; j < 4; j++) {
        forward(50);
        left(120);
    }
    faceDown()
    changeColor(color.blue)
    for (let k = 0; k < 4; k++) {
        forward(50);
        right(90);
    }
    faceRight()
    up()
    forward(50)
    down()
}



// C5
setPos(300,300)
setLineWidth(5)



faceRight()
for (let i =0; i < 4; i++) {
    shiftColor(0.20)
    for (let i =0; i < 8; i++) {
        forward(200)
        left(135)
    }
    right(90)
}


// C6

setPos(300,300);
setLineWidth(5);
changeColor(color.red)

faceRight()

for (let i =0; i < 4; i++) {
    for (let i =0; i < 4; i++) { 
        forward(100)
        left(120)
    }
    forward(100)
}


// C7

setPos(300,400)
changeColor(color.Red)
setLineWidth(5)

faceRight()
for (let i =0; i < 8; i++) {
    for (let i =0; i < 3; i++) {
        forward(50)
        right(120)
    }
    forward(50)
    left(45)

  
}



// D9
setPos(300,300);
changeColor(color.blue);
setLineWidth(5);

let longueur = 50;
faceRight();
for (let i =0; i < 8; i++) {
    
    forward(longueur);
    right(120);
    longueur +=50;
}


// D10
setPos(300,300);
changeColor(color.yellow);
setLineWidth(5);

let longueur = 50;
faceRight();
for (let i =0; i < 10; i++) {
    
    forward(longueur);
    right(90);
    longueur +=50;
}



// D11
setPos(50,300);
changeColor(color.white);
setLineWidth(5);

let longueur = 150;
faceRight();
for (let i =0; i < 5; i++) {
    for (let i =0; i < 4; i++) {
    
        forward(longueur);
        left(120);
    }
    faceRight()
    longueur -=30;
}
*/

// D12
setPos(50,300);
changeColor(color.white);
setLineWidth(5);

let longueur = 50;
faceRight();
for (let i =0; i < 5; i++) {
    for (let i =0; i < 5; i++) {
    
        forward(longueur);
        left(120);
    }
    Right(90)
    longueur +=30;
}





































