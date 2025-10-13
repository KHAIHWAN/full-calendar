export default function MonthView() {
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

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
            <div className="grid grid-cols-7 flex-1 border-l border-gray-200">
                
            </div>
		</div>
	)
}
