/*Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.*/

// function Multiplier() {
//     var lastValue = 1;
//     this.getCurrentValue = function() {
//         return lastValue;
//     }

//     this.multiply = function(a) {
//         // var b = a * 1;
//         if (a > 0) {
//         lastValue = a * lastValue;
//         }
     
//     }

// }

// var otherMultiplier = new Multiplier();

//     otherMultiplier.multiply(5);




// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.


// function Photo(location, time, photographer) {
// 	this.location = location;
// 	this.time = time;
// 	this.photographer = photographer;
// }

// var beach = new Photo("beach", 10, "John");
// var moutain = new Photo("moutain", 3, "Sally");
// var river = new Photo("river", 8, "Zack");
// var leafs = new Photo("leafs", 2, "Tim")

// function Albumn(season) {
// 	this.season = season;
// 	this.photos = [];
// 	this.addPhoto = addPhoto;
// 	this.listPhotos = lsitphotos;
// 	this.accessPhoto = accessPhoto;
// }

// function addPhoto(photo) {
// 	this.photos.push(photo);
// }

// var summerAlbumn = new Albumn("summer");
// var fallAlbumn = new Albumn("fall");
// var winterAlbumn = new Albumn("winter");
// var springAlbumn = new Albumn("spring");

// summerAlbumn.addPhoto(beach);
// fallAlbumn.addPhoto(leafs);
// winterAlbumn.addPhoto(moutain);
// springAlbumn.addPhoto(river);

// function listPhotos() {
// 	for (var i = 0; i < this.photos.length; i++) {
// 		console.log("Photos: " + this.photos[i].fileName);
// 	}

// }

// function accessPhoto(orderNum) {
// 	return this.photos[orderNum - 1];
// }



// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object. Potential methods: A teacher can change the grades of a student, give detention to a student, or send a student to the principal. A student can do her or his homework, skip class, or give the teacher an apple. The school could open or close. 

function Person(age, fname, lname, location) {
	this.age = age;
	this.fname = fname;
	this.lname = lname;
	this.location = location;
}

function Teacher(changeGrade, closeSchool, giveDetention) {
	Person.apply(this, arguments);
	this.fullTime = true;
	this.changeGrade = changeGrade;
	this.closeSchool = closeSchool;
	this.giveDetention = giveDetention;
}

function Student(skipClass) {
	Person.apply(this, arguments);
	this.grade = 0;
	this.passing = true;
	this.skipClass = true;
}

function School(enroll, hire) {
	this.studentList = [];
	this.teachers = [];
	this.enroll = enroll;
	this.hire = hire;
}

function enroll(newStudent) {
	this.studentList.push(newStudent);
}

function hire(teachers) {
	this.teachers.push(newTeacher);
}

var John = new Student (15, "John", "Smith", "Philadelphia");
var Tim = new Student (13, "Tim", "Posh", "Philadelphia");
var Trent = new Student (17, "Trent", "Res", "Philadelphia");

var Sam = new Teacher (35, "Sam", "Kane", "Philadelphia");
var Amy = new Teacher (28, "Amy", "Mush", "Philadelphia");
var Bill = new Teacher (47, "Bill", "Preacher", "Philadelphia");


// function giveDetention(detention, Student) {
// 	if (Student.skipClass = true) {
// 		Student.giveDetention 
// 	}
// }

function changeGrade(student, grade){
	student.grade += grade;
		if(student.grade >= 80) {
			student.passing = true;
		}
		else {
			student.passing = false; 
		}
}







