#pragma strict

var Distance : float;
var Target : Transform;
var lookAtDistance = 25.0;
var chaseRange = 15.0;
var attackRange = 1.5;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1.0;
var rend: Renderer;

var TheDammage = 40;

private var attackTime : float;

var controller : CharacterController;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;

function Start ()
{
	attackTime = Time.time;
	rend = GetComponent.<Renderer>();
}

function Update ()
{
	Distance = Vector3.Distance(Target.position, transform.position);


	if (Distance < lookAtDistance)
	{
		
		lookAt();
	}
	
//	if (Distance > lookAtDistance)
//	{
//		rend.material.color = Color.green;
//	}
	
	if (Distance < attackRange)
	{
		attack();
	}
	else if (Distance < chaseRange)
	{
		chase ();
		  
	}
}

function lookAt ()
{
	//rend.material.color = Color.yellow;
	GetComponent.<AudioSource>().Play();
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation =  Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function chase ()
{
	//rend.material.color = Color.red;

	moveDirection = transform.forward;
	moveDirection *= moveSpeed;
	moveDirection.y -= gravity * Time.deltaTime;
	controller.Move(moveDirection * Time.deltaTime);
}

function attack ()
{
	if (Time.time > attackTime)
	{
		Target.SendMessage("ApplyDammage", TheDammage);
		Debug.Log("The Enemy Has Attacked");
		attackTime = Time.time + attackRepeatTime;
	}
}

function ApplyDammage ()
{
	chaseRange += 30;
	moveSpeed += 2;
	lookAtDistance += 40;
}