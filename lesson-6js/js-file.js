'use strict'

function Robot() {
	var self = this;
	this.work = function() {
		console.log('I`m Robot. I working!');
	}
}

function CoffeeRobot() {
	Robot.call(this);
	var self = this;
	this.work = function() {
		console.log('I`m CoffeeRobot. I make coffee!');
	}
}

function RobotDancer() {
	Robot.call(this);
	var self = this;
	this.work = function() {
		console.log('I`m RobotDancer. I dancing!');
	}
}

function RobotCooker() {
	Robot.call(this);
	var self = this;
	this.work = function() {
		console.log('I`m RobotCooker. I cooking!');
	}
}

var robot = new Robot();
var coffeeRobot = new CoffeeRobot();
var robotDancer = new RobotDancer();
var robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

var array = [robot, coffeeRobot, robotDancer, robotCooker];

for(var i = 0; i<array.lenght; i++){
	array[i].work();
}