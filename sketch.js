let homepage = {
  "style": {}
};
let logo;
let reyna;
let mc = false;
let divBackground;
let possibleButton, openClassesButton, leaderSearchButton;
let location_dot, person, calendar, search;
let myAbout, myLogin, myAdmissions, myAcademicsSupport, myCampusLife, myFinish;

function preload() {
  frameRate(5);
  divBackground = loadImage("Break_Barriers_Gradient_Backgrounds_1920x1080_ARTBOARD-7_REVERSE.jpg");
  homepage = loadImage("homepage.png");
  logo = loadImage("pcc-logo-dark-125.png");
  reyna = loadImage("reyna_g.png");
  orangeBackground = loadImage("womxn_history_month.jpg");
}

function setup() {
  location_dot = createImg(
    "location_dot.svg",
    'location_dot'
  );
  location_dot.elt.id = "location_dot";

  calendar = createImg(
    "calendar.svg",
    'calendar'
  );
  calendar.elt.id = "calendar";


  person = createImg(
    "person.svg",
    'person'
  );
  person.elt.id = "person";

  search = createImg(
    "magnifying_glass.svg",
    'search'
  );
  search.elt.id = "search";




  frameRate(5);
  createCanvas(1920, 950);

  //MENU BAR BACKGROUND
  
  fill(0);
  rect(0, 0, 1919, 30);


  homepage = createImg(
    "homepage.png",
    'homepage'
  );
  homepage.position(0, 0);
  // image(homepage, 0, 0, 1920, 950);
  // image(logo, 250,55,0,0);



  //MAIN

  logo.resize(0, 79);

  image(logo, 245, 57, 0, 0);
  image(orangeBackground, 0, 150, 1920, 0);
  image(divBackground, 0, 219, 1920, 0);

  //ORANGE BAR
  fill(237, 178, 40);
  noStroke();
  rect(1, 714, 1920, 160)


  possibleButton = createButton("FIND OUT WHAT'S POSSIBLE");
  possibleButton.position(252, 515);
  possibleButton.style("color", "white");
  possibleButton.style("background-color", "black");
  possibleButton.style("font-family", "Arial");
  possibleButton.style("font-size", "18px");
  possibleButton.style("weight", "bold");
  possibleButton.style("height", "50px");
  possibleButton.style("font-weight", "600");
  possibleButton.style("border-width", 0);
  possibleButton.style("vertical-align", "middle");
  possibleButton.style("text-align", "center");
  possibleButton.mousePressed((ev) => {
    console.log(ev, " WHAT'S POSSIBLE");
  });


  openClassesButton = createButton("Find Open Classes");
  openClassesButton.position(1242, 722);
  openClassesButton.style("color", "white");
  openClassesButton.style("background-color", "red");
  openClassesButton.style("font-family", "Arial");
  openClassesButton.style("font-size", "18px");
  openClassesButton.style("font-weight", "600");
  openClassesButton.style("border-width", 0);
  openClassesButton.style("weight", "bold");
  openClassesButton.style("height", "50px");
  openClassesButton.style("vertical-align", "middle");
  openClassesButton.style("text-align", "center");
  openClassesButton.mousePressed((ev) => {
    console.log(ev, " Find Open Classes");
  });



  leaderSearchButton = createButton("Superintendent/President Search");
  leaderSearchButton.position(1242, 810);
  leaderSearchButton.style("color", "red");
  leaderSearchButton.style("background-color", "white");
  leaderSearchButton.style("font-family", "Arial");
  leaderSearchButton.style("font-size", "14px");
  leaderSearchButton.style("font-weight", "600");
  leaderSearchButton.style("border-width", 4);
  leaderSearchButton.style("border-color", "red");
  leaderSearchButton.style("weight", "bold");
  leaderSearchButton.style("height", "50px");
  leaderSearchButton.style("vertical-align", "middle");
  leaderSearchButton.style("text-align", "center");
  leaderSearchButton.mousePressed((ev) => {
    console.log(ev, " Superintendent/President Search");
  });





  ///////MENU BAR


  //MENU BAR BACKGROUND
  // fill(0);
  // rect(0, -10, 1920, 60)
  if (true) {
    //Why_PCC 
    let Why_PCC = createButton("Why PCC");
    Why_PCC.position(673, 5);
    Why_PCC.style("color", "black");
    Why_PCC.style("background-color", "white");
    Why_PCC.style("font-family", "Arial");
    Why_PCC.style("font-weight", "600");
    Why_PCC.style("border-width", 0);
    Why_PCC.style("vertical-align", "middle");
    Why_PCC.style("font-size", "13px");
    Why_PCC.mousePressed((ev) => {
      console.log(ev, " Why PCC");
    });

    //Current_Students 
    let Current_Students = createButton("Current_Students");
    Current_Students.position(768, 5);
    Current_Students.style("color", "white");
    Current_Students.style("background-color", "black");
    Current_Students.style("font-family", "Arial");
    Current_Students.style("font-weight", "600");
    Current_Students.style("border-width", 0);
    Current_Students.style("font-size", "13px");
    Current_Students.mousePressed((ev) => {
      console.log(ev, " Current_Students");
    });

    //Faculty_Staff 
    let Faculty_Staff = createButton("Faculty & Staff");
    Faculty_Staff.position(912, 5);
    Faculty_Staff.style("color", "white");
    Faculty_Staff.style("background-color", "black");
    Faculty_Staff.style("font-family", "Arial");
    Faculty_Staff.style("font-weight", "600");
    Faculty_Staff.style("border-width", 0);
    Faculty_Staff.style("font-size", "13px");
    Faculty_Staff.mousePressed((ev) => {
      console.log(ev, " Faculty & Staff");
    });

    //Community 
    let Community = createButton("Community");
    Community.position(1038, 5);
    Community.style("color", "white");
    Community.style("background-color", "black");
    Community.style("font-family", "Arial");
    Community.style("font-weight", "600");
    Community.style("border-width", 0);
    Community.style("font-size", "13px");
    Community.mousePressed((ev) => {
      console.log(ev, " Community");
    });

    //Give 
    let Give = createButton("Give");
    Give.position(1146, 5);
    Give.style("color", "white");
    Give.style("background-color", "black");
    Give.style("font-family", "Arial");
    Give.style("font-weight", "600");
    Give.style("border-width", 0);
    Give.style("font-size", "13px");
    Give.mousePressed((ev) => {
      console.log(ev, " Give");
    });

    //Campus_Maps
    location_dot.position(1205, 5);
    location_dot.mousePressed((ev) => {
      console.log(ev, "map");
    });

    //Calendar 
    calendar.position(1253, 5);
    calendar.mousePressed((ev) => {
      console.log(ev, "calendar");
    });

    //People 
    person.position(1303, 5);
    person.mousePressed((ev) => {
      console.log(ev, "person");
    });

    //Search 
    search.position(1623, 84);
    search.mousePressed((ev) => {
      console.log(ev, "search");
    });

    //COVID_19
    let COVID_19 = createButton("COVID-19 Info");
    COVID_19.position(1355, 5);
    COVID_19.style("color", "white");
    COVID_19.style("background-color", "black");
    COVID_19.style("font-family", "Arial");
    COVID_19.style("font-weight", "600");
    COVID_19.style("border-width", 0);
    COVID_19.style("font-size", "13px");
    COVID_19.mousePressed((ev) => {
      console.log(ev, " COVID_19");
    });



    //myLogin
    myLogin = createSelect();
    myLogin.position(1486, 5);
    myLogin.size(60, 20);
    myLogin.style("border", 0);
    myLogin.style("color", "#FFF");
    myLogin.style("font-weight", "600");
    myLogin.style("font-size", "13px");
    myLogin.style("background-color", "#949492");

    // Add color options.
    myLogin.option('Finish');
    myLogin.option('green');
    myLogin.option('blue');
    myLogin.option('yellow');
    // // Set the selected option to "red".
    // myLogin.selected('red');


    //Apply_Now
    let Apply_Now = createButton("Apply Now");
    Apply_Now.position(1569, 5);
    Apply_Now.style("color", "white");
    Apply_Now.style("background-color", "red");
    Apply_Now.style("font-family", "Arial");
    Apply_Now.style("font-weight", "600");
    Apply_Now.style("border-width", 0);
    Apply_Now.style("font-size", "13px");
    Apply_Now.style("margin", "6x");
    Apply_Now.mousePressed((ev) => {
      console.log(ev, " Apply Now");
    });


  }


  //FOOTER

  //WHITE BAR AT BOTTOM
  fill(255);
  noStroke();
  rect(1, 784, 1920, 180)

  // fill(155);
  // //Inner white bar with shadow
  // rect(width/2, 784, width/5, 20)

  

  let getHelpButton = createButton("Get Help");
  getHelpButton.position(1770, 871);
  getHelpButton.style("color", "white");
  getHelpButton.style("background-color", "black");
  getHelpButton.style("font-family", "Arial");
  getHelpButton.style("font-weight", "600");
  getHelpButton.style("font-size", "22px");
  // getHelpButton.style("margin", "12px");
  // getHelpButton.style("text-align", "center");
  // getHelpButton.style("vertical-align", "middle");
  getHelpButton.style("border-width", 0);
  getHelpButton.style("border-radius", "16px");
  // getHelpButton.style("height", "35px");
  getHelpButton.mousePressed((ev) => {
    console.log(ev, " Get Help");
  });




  //
  //REYNA 

  reyna.resize(708, 0);
  image(reyna, 980, 220, 0, 0);
  fill(255);
  textFont('Arial');
  textStyle(BOLD);
  textSize(16);
  text('REYNA GRANDE,', 971, 612);
  text('BEST SELLING AUTHOR,', 971, 632);
  text('UC SANTA CRUZ TRANSFER', 971, 652);



  //Dropdown select boxes
  //About
  myAbout = createSelect();
  myAbout.position(800, 84);
  myAbout.size(100, 20);
  myAbout.style("border", 0);
  myAbout.style("font-size", "18px");
  myAbout.style("background-color", "#fff");

  // Add color options.
  myAbout.option('About');
  myAbout.option('green');
  myAbout.option('blue');
  myAbout.option('yellow');
  // // Set the selected option to "red".
  // myAbout.selected('red');

  //myAdmissions
  myAdmissions = createSelect();
  myAdmissions.position(914, 84);
  myAdmissions.size(165, 20);
  myAdmissions.style("border", 0);
  myAdmissions.style("font-size", "18px");
  myAdmissions.style("background-color", "#fff");

  // Add color options.
  myAdmissions.option('Admissions & Aid');
  myAdmissions.option('green');
  myAdmissions.option('blue');
  myAdmissions.option('yellow');
  // // Set the selected option to "red".
  // myAdmissions.selected('red');

  //myAcademicsSupport
  myAcademicsSupport = createSelect();
  myAcademicsSupport.position(1118, 84);
  myAcademicsSupport.size(200, 20);
  myAcademicsSupport.style("border", 0);
  myAcademicsSupport.style("font-size", "18px");
  myAcademicsSupport.style("background-color", "#fff");

  // Add color options.
  myAcademicsSupport.option('Academics & Support');
  myAcademicsSupport.option('green');
  myAcademicsSupport.option('blue');
  myAcademicsSupport.option('yellow');
  // // Set the selected option to "red".
  // myAcademicsSupport.selected('red');

  //myCampusLife
  myCampusLife = createSelect();
  myCampusLife.position(1360, 84);
  myCampusLife.size(120, 20);
  myCampusLife.style("border", 0);
  myCampusLife.style("font-size", "18px");
  myCampusLife.style("background-color", "#fff");

  // Add color options.
  myCampusLife.option('CampusLife');
  myCampusLife.option('green');
  myCampusLife.option('blue');
  myCampusLife.option('yellow');
  // // Set the selected option to "red".
  // myCampusLife.selected('red');

  //myFinish
  myFinish = createSelect();
  myFinish.position(1510, 84);
  myFinish.size(100, 20);
  myFinish.style("border", 0);
  myFinish.style("font-size", "18px");
  myFinish.style("background-color", "#fff");

  // Add color options.
  myFinish.option('Finish');
  myFinish.option('green');
  myFinish.option('blue');
  myFinish.option('yellow');
  // // Set the selected option to "red".
  // myFinish.selected('red');





  // noLoop;
}

function draw() {
  //  background(220);
  if (mc === true) {
    // console.log("mc",ev)
    homepage.style("display", "block");
  } else {





    //HERSTORY DESCRIPTION
    fill(255);
    textFont('Arial');
    textStyle(BOLD);
    textSize(22);
    text('MARCH IS WOMENS HERSTORY MONTH -->', 720, 198);


    //PAGE TITLE QUESTION
    fill(0);
    textFont('Arial');
    textStyle(BOLD);
    textSize(68);
    text('HOW WILL YOU', 254, 402);
    text('BREAK BARRIERS?', 254, 476);



    //PAGE TITLE QUESTION
    fill(0);
    textFont('Arial');
    textStyle(NORMAL);
    textSize(24);
    text("SPRING 2024  It's Not Too Late! Register for late-start classes.", 510, 754);

    //Learn more about the Pasadena Area Community College District's search for a Superintendent/President.
    fill(0);
    textFont('Arial');
    textStyle(BOLD);
    textSize(16);
    text("Learn more about the Pasadena Area Community College District's search for a Superintendent/President.", 416, 843);



  }


  // background(200);

  let step = frameCount % 20;
  let angle = map(step, 0, 20, 0, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  translate(50, 50);
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  // rect(400,400, 50, 50);
  possibleButton.mouseOver((ev) => {
    console.log(ev);
    let step = frameCount % 20;
    let angle = map(step, 0, 20, 0, TWO_PI);
    let cos_a = cos(angle);
    let sin_a = sin(angle);
    translate(50, 50);
    // Equivalent to rotate(angle);
    applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
    rect(400, 400, 50, 50);
  });


  document.getElementById("calendar").style.width = "1em";
  document.getElementById("person").style.width = "1em";
  document.getElementById("location_dot").style.width = "1em";
  document.getElementById("search").style.width = "1em";

}

//display position of the cursor which useful for drawing shapes
function doubleClicked() {
  console.log(mouseX + "," + mouseY);
}

function mousePressed(ev) {
  console.log("mp", ev)
  homepage.style("display", "none");
}

function mouseClicked(ev) {
  console.log("mc", ev)
  homepage.style("display", "block");
}