#pragma strict

var Health = 100;
var texture : Texture;
var rend: Renderer;
//var PlayerStats : MonoScript;

function Start()
{
	rend = GetComponent.<Renderer>();
}

function Update ()
{
	if ( Health <= 50 )
	{
		rend.material.mainTexture = texture;
	}
	if ( Health <= 0 )
	{
		//PlayerStats.AddScore();
		Dead();

	}
}

function ApplyDamage (TheDamage : int) 
{
	Health -= TheDamage;
}

function Dead()
{
	
	Destroy ( gameObject );
}