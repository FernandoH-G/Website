export function parseText(message) {
    // Handle the title of the commit to be seperate from body. Detect \n?
    if (message.length > 150) {
        return `${message.substr(0, 150)}...`
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