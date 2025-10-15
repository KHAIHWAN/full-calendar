"use client"

// Import Components
import { getDaysInMonth, isToday } from "@/utils/calendar"

export default function MonthView({ currentDate }: { currentDate: Date }) {
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())

	const isCurrentMonth = (date: Date): boolean => {
		return date.getMonth() === currentDate.getMonth()
	}

	return (
		<div className='flex flex-col h-full'>
			{/* Week Days Header */}
			<div className='grid grid-cols-7 border-b border-gray-200'>
				{weekDays.map((day) => (
					<div
						key={day}
						className='py-3 text-center text-sm font-semibold text-gray-600 border-r border-gray-200 last:border-r-0'>
						{day}
					</div>
				))}
			</div>

			{/* Calendar Grid */}
			<div className='grid grid-cols-7 flex-1 border-l border-gray-200'>
				{days.map((day: Date, index: number) => (
					<div
						key={index}
						className={`
							min-h-[120px] p-2 border-b border-r border-gray-200 last:border-r-0
							${isCurrentMonth(day) ? "bg-white" : "bg-gray-50"}
						`}>
						<div
							className={
								isToday(day)
									? "w-7 h-7 flex items-center justify-center bg-black text-white p-2 rounded-full"
									: ""
							}>
							{day.getDate()}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
