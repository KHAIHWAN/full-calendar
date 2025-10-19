'use client'

// utils
import { getDays, weekDays, isToday } from "@/utils/calendar"

export default function MonthView({ currentDate }: { currentDate: Date }) {
    const days = getDays(currentDate.getFullYear(), currentDate.getMonth())

    const isCurrentMonth = (date: Date) => {
        return (
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        )
    }

    return (
        <div className="flex flex-col h-full">
            <div className="grid grid-cols-7 border-b border-gray-200">
                {weekDays.map((dayName: string, dayNameIndex: number) => (
                    <div key={dayNameIndex} className="py-3 text-center text-sm font-semibold text-gray-600 border-r border-gray-200 last:border-r-0">
                        {dayName}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 flex-1 border-1 border-gray-200">
                {days.map((day: Date, dayIndex: number) => (
                    <div key={dayIndex} className={`min-h-[120px] p-2 border-b border-r border-gray-200 last:border-r-0
                        ${isCurrentMonth(day)
                            ? 'bg-white' 
                            : 'bg-gray-100'}`}>
                        <div className={`text-sm font-medium mb-1 
                            ${isToday(day) 
                                ? 'w-7 h-7 rounded-full bg-black text-white flex items-center justify-center' 
                                : ''}`}>
                            {day.getDate()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}