
function cleare_error(){
	var v_name = document.getElementById("v_name").value;
	var v_email = document.getElementById("v_email").value;
	var v_phone = document.getElementById("v_phone").value;
	var v_msg = document.getElementById("v_msg").value;

	document.getElementById("v_name").innerHTML = "";
	document.getElementById("v_email").innerHTML = "";
	document.getElementById("v_phone").innerHTML = "";
	document.getElementById("v_msg").innerHTML = "";
}
function validation()
		{
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var phone = document.getElementById("phone").value;
			var msg = document.getElementById("msg").value;
			cleare_error();


			if (name.trim() == ""){
				document.getElementById("v_name").innerHTML = "**Enter Your Name";
				return false;
			}
			if (name.trim().length < 3){
				document.getElementById("v_name").innerHTML = "**Name should Be More Than 2 Letters";
				return false;
			}
			if (email == ""){
				document.getElementById("v_email").innerHTML = "**Enter Your Email-ID";
				return false;
			}
			if (phone == ""){
				document.getElementById("v_phone").innerHTML = "**Enter Your Phone Number";
				return false;
			}
			if (phone.length != 10){
				document.getElementById("v_phone").innerHTML = "**Enter 10 Digit Phone Number";
				return false;
			}
			if (msg.trim() == ""){
				document.getElementById("v_msg").innerHTML = "**Write Message To Our Team";
				return false;
			}
			else{
					cleare_error();
  					alert("Your Message Send Successfully!");
  					document.getElementById("thanks").innerHTML = "Thanks for contact our team.";	
  				return true;
			}
		}	