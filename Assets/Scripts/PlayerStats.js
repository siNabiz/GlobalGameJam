#pragma strict
import UnityEngine.UI;
var Health = 100;
var maxHealth = 100;
var HealthText : Text;
var gameOver : TextMesh; 
var scoreText : Text;
var score = 0;

function Start ()
{
	//HealthText = GetComponent.<Text> ();
	Health = maxHealth;
	HealthText.text = "Health: " + Health;
	gameOver.text = "";
}
//function Update ()
//{
//	HealthText.text = "Health: 100" ;
//}
function ApplyDammage (TheDammage : int)
{
	Health -= TheDammage;

	if (Health > 0) {
		HealthText.text = "Health: " + Health;
	}
	else if(Health <= 0)
	{
		HealthText.text = "Health: 0" ;
		gameOver.text = "You Fucked UP!";
		Dead();
	}
}

function Dead()
{
	RespawnMenu.playerIsDead = true; //VERY IMPORTANT! This line was added in tutorial number 19. If you haven't reached that tutorial yet, go ahead and remove it.
	Debug.Log("Player Died");
}

function RespawnStats ()
{
	Health = maxHealth;
	HealthText.text = "Health: " + Health;
	gameOver.text = "";

}

function AddScore()
{
	score += 10;
	scoreText.text = "Score: " + score;
}