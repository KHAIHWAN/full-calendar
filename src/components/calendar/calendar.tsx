"use client"

// React
import { useState } from "react"

// Shadcn UI
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

// Lucide Icons
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Components
import MonthView from "./views/MonthView"
import WeekView from "./views/WeekView"
import DayView from "./views/DayView"
import AgendaView from "./views/AgendaView"

export default function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [view, setView] = useState("month")

	const getMonth = () => {
		return currentDate.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	}

	const handlePreviousMonth = () => {
		const newDate = new Date(currentDate)
		newDate.setMonth(newDate.getMonth() - 1)
		setCurrentDate(newDate)
	}

	const handleNextMonth = () => {
		const newDate = new Date(currentDate)
		newDate.setMonth(newDate.getMonth() + 1)
		setCurrentDate(newDate)
	}

	const handleToday = () => {
		setCurrentDate(new Date())
	}

	return (
		<div className='h-screen flex flex-col bg-white'>
			{/* Header Calendar */}
			<header className='border-b border-gray-200 px-6 py-4'>
				<div className='flex items-center justify-between'>
					{/* Header Left */}
					<div className='flex items-center space-x-2'>
						<h1 className='text-2xl font-bold text-gray-600'>Full Calendar</h1>
					</div>

					{/* Header Right */}
					<div className='flex items-center space-x-2'>
						<Button
							variant='default'
							className='bg-black hover:bg-gray-800 text-white px-4 py-2'>
							Add Booking
						</Button>
					</div>
				</div>

				{/* Header Sub */}
				<div className='flex items-center justify-between mt-2'>
					{/* Header Sub Left */}
					<div className='flex items-center space-x-2'>
						<Button
							variant='outline'
							className='border-gray-300'
							onClick={handleToday}>
							Today
						</Button>
						<div className='flex items-center space-x-2'>
							<Button
								variant='outline'
								size='icon'
								className='border-gray-300'
								onClick={handlePreviousMonth}>
								<ChevronLeft />
							</Button>
							<Button
								variant='outline'
								size='icon'
								className='border-gray-300'
								onClick={handleNextMonth}>
								<ChevronRight />
							</Button>
						</div>
						<h2 className='text-xl font-medium text-gray-900 ml-2'>
							{getMonth()}
						</h2>
					</div>

					{/* Header Sub Right */}
					<div className='flex items-center space-x-2'>
						<ButtonGroup>
							<Button
								onClick={() => setView("month")}
								variant={view === "month" ? "default" : "outline"}
								className={view === "month" ? "border-gray-300" : "border-gray-200"}>
								Month
							</Button>
							<Button
								onClick={() => setView("week")}
								variant={view === "week" ? "default" : "outline"}
								className={view === "week" ? "border-gray-300" : "border-gray-200"}>
								Week
							</Button>
							<Button
								onClick={() => setView("day")}
								variant={view === "day" ? "default" : "outline"}
								className={view === "day" ? "border-gray-300" : "border-gray-200"}>
								Day
							</Button>
							<Button
								onClick={() => setView("agenda")}
								variant={view === "agenda" ? "default" : "outline"}
								className={view === "agenda" ? "border-gray-300" : "border-gray-200"}>
								Agenda
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</header>

			{view === "month" && <MonthView currentDate={currentDate} />}
			{view === "week" && <WeekView />}
			{view === "day" && <DayView />}
			{view === "agenda" && <AgendaView />}	
		</div>
	)
}
