'use client'

import { getHours, getWeekDays } from "@/utils/calendar"

export default function DayView({ currentDate }: { currentDate: Date }) {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="border-b border-gray-200 p-4 bg-white sticky top-0 z-10">
                <h2 className="text-2xl font-bold text-gray-900">
                    {currentDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </h2>
                <p className="text-sm text-gray-500">
                    {currentDate.toLocaleDateString('en-US', {
                        weekday: 'long'
                    })}
                </p>
            </div>

            {/* Time Slots */}
            <div className="flex-1 overflow-auto">
                {getHours().map((hour: string, hourIndex: number) => (
                    <div key={hourIndex} className="flex border-b border-gray-200">
                        <div className="w-20 py-2 px-2 text-xs text-gray-500 text-right border-r border-gray-200 flex-shrink-0">
                            {hour}
                        </div>
                        <div className='flex-1 min-h-[80px] p-2 relative transition-colors select-none'>
                            
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>
    )
}