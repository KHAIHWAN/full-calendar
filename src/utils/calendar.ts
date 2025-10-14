export const getDaysInMonth = (year: number, month: number): Date[] => {
    const days: Date[] = []

    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)
    
    for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
        days.push(new Date(year, month, i))
    }
    
    return days
}