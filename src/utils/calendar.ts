export const getDaysInMonth = (year: number, month: number): Date[] => {
    const days: Date[] = []

    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)

    const startDayOfWeek = firstDayOfMonth.getDay()

    if (startDayOfWeek > 0) {
        const previousMonth = new Date(year, month, 0)
        const previousMonthLastDay = previousMonth.getDate()

        const firstDayFirstWeekOfMonth = previousMonthLastDay - startDayOfWeek + 1

        for (let day = firstDayFirstWeekOfMonth; day <= previousMonthLastDay; day++) {
            days.push(new Date(year, month - 1, day))
        }
    }

    const totalDaysInMonth = lastDayOfMonth.getDate()

    for (let day = 1; day <= totalDaysInMonth; day++) {
        days.push(new Date(year, month, day))
    }
    
    // Table Row 6 weeks 7 days = 42 days
    const remainingDays = 42 - days.length
    
    for (let day = 1; day <= remainingDays; day++) {
        days.push(new Date(year, month + 1, day))
    }
    
    return days
}

export const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    )
}

export const isToday = (date: Date): boolean => {
    return isSameDay(date, new Date())
}
