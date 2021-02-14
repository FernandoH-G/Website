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