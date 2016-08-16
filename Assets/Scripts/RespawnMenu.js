//IMPORTANT NOTE! If you are using this script without having watched video number 20 then you must go ahead and remove the "//" from the script.
//The "//" signs were added because the sprintScript was deleted and instead we use the FPSWalkerEnhanced.
//Also note that the variable charMotor was changed to charController because it will then work with both the old and new setup.
//If any of this confuses you, watch tutorial number 20 :)

#pragma strict
import UnityStandardAssets.Characters.FirstPerson;

var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var charController : CharacterController;

//var gameOverTexture : Texture;
var respawnTransform : Transform;

static var playerIsDead = false;

function Start () 
{
	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = gameObject.Find("First Person Controller/MainCamera").GetComponent(MouseLook);
	charController = gameObject.GetComponent(CharacterController);
}

function Update ()
{
	if (playerIsDead == true)
	{
		lookAround01.SetCursorLock(false);
		lookAround02.SetCursorLock(false);
		charController.enabled = false;
		//GUI.DrawTexture(new Rect(0,0, Screen.width, Screen.height), gameOverTexture);
	}
}

function OnGUI ()
{
	if (playerIsDead == true)
	{
		if (GUI.Button(Rect(Screen.width*0.5-50, 200-20, 100, 40), "Respawn"))
		{
			RespawnPlayer();
		}
	}
}

function RespawnPlayer ()
{
	transform.position = respawnTransform.position;
	transform.rotation = respawnTransform.rotation;
	gameObject.SendMessage("RespawnStats");
	lookAround01.SetCursorLock(true);
	lookAround02.SetCursorLock(true);
	charController.enabled = true;
	playerIsDead = false;
	Debug.Log("Player has respawned");
}

@script RequireComponent(CharacterController)