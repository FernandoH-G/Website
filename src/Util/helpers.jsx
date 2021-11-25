import ic_gw2items from "./../Images/ic_gw2_items_512x512.png"
import ic_gw2itemsServer from "./../Images/ic_gw2_items_server_512x512.png"
import ic_snipsnap from "./../Images/ic_snipsnap_512x512.png"
import ic_snipsnapServer from "./../Images/ic_snipsnap_server_512x512.png"
import ic_website from "./../Images/ic_my_pig_512x512.png"
import ic_kcc from "./../Images/ic_kern_county_covid_512x512.png"

export function parseText(message) {
	if (message.length > 100) {
		return `${message.substr(0, 100)}...`
	} else {
		return `${message}`

	}
}

export function parseDate(date) {
	const newDate =
		new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "2-digit"
		}).format(new Date(date))
	return newDate
}

export function chooseIMG(name) {
	switch (name) {
		case "GW2-Items":
			return ic_gw2items
		case "GW2-Items-Server":
			return ic_gw2itemsServer
		case "SnipSnap-Barber":
			return ic_snipsnap
		case "SnipSnap-Barber-Server":
			return ic_snipsnapServer
		case "FernandoH-G.tech":
			return ic_website
		case "Kern-County-Covid":
			return ic_kcc
		default:
			return "https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
	}
}