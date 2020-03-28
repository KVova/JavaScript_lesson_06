'use strict'

function Robot() {
	
}

Robot.prototype.work = function() {
	console.log('I`m Robot. I work');
};

function CoffeeRobot() {
	
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;
CoffeeRobot.prototype.work = function() {
	console.log('I`m CoffeeRobot. I make coffee!');
};

function RobotDancer() {
	
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function() {
	console.log('I`m RobotDancer. I dancing!');
}

function RobotCooker() {
	
}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.work = function() {
	console.log('I`m RobotCooker. I cooking!');
};

var robot = new Robot();
var coffeeRobot = new CoffeeRobot();
var robotDancer = new RobotDancer();
var robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

var array = [robot, coffeeRobot, robotDancer, robotCooker];

for(var i = 0; i< array.lenhth; i++){
	array[i].work();
}