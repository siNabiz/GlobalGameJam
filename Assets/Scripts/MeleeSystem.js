#pragma strict
//@RequireComponent(AudioSource)

var TheDamage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;
var TheMace : Transform;


//function Start ()
//{
//	
//}
function Update ()
{
	if (Input.GetButtonDown("Fire1"))
	{
		GetComponent.<AudioSource>().Play();

		//TheMace.GetComponent.<Animation>().Stop();
		TheMace.GetComponent.<Animation>().Play("Sword");
		var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit))
		{
			Distance = hit.distance;
			if ( Distance < MaxDistance )
			{
				hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
			}
		} 
	}
}