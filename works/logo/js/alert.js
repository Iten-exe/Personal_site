var basket_alert_btn = document.querySelector('.basket_alert_btn');
var favorites_alert_btn = document.querySelector('.favorites_alert_btn');
var basket_alert = document.querySelector('.basket_alert');
var favorites_alert = document.querySelector('.favorites_alert');

favorites_alert_btn.onclick = function() {
	favorites_alert.style.display="block";
	setTimeout(function() {
		favorites_alert.style.display="none";
	}, 2000);
}
basket_alert_btn.onclick = function() {
	basket_alert.style.display="block";
	setTimeout(function() {
		basket_alert.style.display="none";
	}, 2000);
}
