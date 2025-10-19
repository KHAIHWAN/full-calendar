export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const getDays = (year: number, month: number): Date[] => {
    const days: Date[] = [];

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0)

    const DayOfWeek = firstDayOfMonth.getDay()

    if (DayOfWeek > 0) {
        const previousMonth = new Date(year, month, 0)
        const previousMonthDays = previousMonth.getDate()

        const startDayOfWeek = previousMonthDays - DayOfWeek + 1

        for (let day = startDayOfWeek; day <= previousMonthDays; day++) {
            days.push(new Date(year, month - 1, day))
        }
    }

    const totalDaysInMonth = lastDayOfMonth.getDate()

    for (let day = 1; day <= totalDaysInMonth; day++) {
        days.push(new Date(year, month, day))
    }

    // Table Row 6, weeks 7 days = 42 days
    const remainingDays = 42 - days.length

    for (let day = 1; day <= remainingDays; day++) {
        days.push(new Date(year, month + 1, day))
    }

    return days
}
