'use client'

import { getWeekDays, isToday } from "@/utils/calendar"

export default function WeekView({ currentDate }: { currentDate: Date }) {
    const weekDays = getWeekDays(currentDate)

    return (
        <div className="flex flex-col h-full overflow-auto">
            <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-gray-200 sticky top-0 bg-white z-10">
                <div className="border-r border-gray-200"></div>
                {weekDays.map((day: Date, dayIndex: number) => (
                    <div 
                        key={dayIndex} 
                        className={`py-3 text-center border-r border-gray-200 last:border-r-0
                        ${isToday(day) 
                            ? 'bg-gray-200' 
                            : ''}`
                        }>
                            <div className="text-xs text-gray-500">
                                {day.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div
                                className={`text-lg font-semibold
                                ${isToday(day)
                                    ? 'w-8 h-8 mx-auto rounded-full bg-black text-white'
                                    : ''}`}
                            >
                                {day.getDate()}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}