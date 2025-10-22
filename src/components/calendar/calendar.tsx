"use client"

// React
import { useState } from "react"

// Shadcn UI Components
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

// Lucide Icon
import { CalendarPlus, ChevronLeft, ChevronRight } from "lucide-react"

// Import Components Calendar 
import MonthView from "./views/MonthView"
import WeekView from "./views/WeekView"
import DayView from "./views/DayView"
import AgendaView from "./views/AgendaView"

import DialogBooking from "./dialogBooking"

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [viewCalendar, setViewCalendar] = useState('week')

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleToday = () => {
        setCurrentDate(new Date())
    }

    const handlePrevious = () => {
        const newDate = new Date(currentDate)
        switch (viewCalendar) {
            case 'month':
                newDate.setMonth(newDate.getMonth() - 1)
                break
            case 'week':
                newDate.setDate(newDate.getDate() - 7)
                break
            case 'day':
                newDate.setDate(newDate.getDate() - 1)
                break
        }
        setCurrentDate(newDate)
     }

    const handleNext = () => {
        const newDate = new Date(currentDate)
        switch (viewCalendar) {
            case 'month':
                newDate.setMonth(newDate.getMonth() + 1)
                break
            case 'week':
                newDate.setDate(newDate.getDate() + 7)
                break
            case 'day':
                newDate.setDate(newDate.getDate() + 1)
                break
        }
        setCurrentDate(newDate)
    }

    const showCurrentDate = () => {
        switch (viewCalendar) {
            case 'month':
                return currentDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            case 'week':
                const weekStart = new Date(currentDate)
                const day = weekStart.getDay()
                const startDayOfWeek = weekStart.getDate() - day

                weekStart.setDate(startDayOfWeek)

                const weekEnd = new Date(weekStart)
                weekEnd.setDate(weekEnd.getDate() + 6)
                
                return `${weekStart.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                })} - ${weekEnd.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })}`
            case 'day':
                return currentDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) 
            case 'agenda':
                return 'Agenda'
        }
    }

    const handleCreateBooking = () => {
        setIsDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    }

	return (
		<div className='h-screen flex flex-col bg-white'>

			{/* Header */}
			<div className='border-b border-gray-200 px-6 py-4'>
				<div className='flex items-center justify-between'>

					{/* Header Left Logo */}
					<div className='flex items-center space-x-4'>
						<h1 className='text-2xl font-bold text-gray-900'>
							Full Calendar Booking Room
						</h1>
					</div>

					{/* Header Right Button Action Booking */}
					<div className='flex items-center space-x-4'>
						<Button 
                            className='rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600'
                            onClick={handleCreateBooking}
                        >
							<CalendarPlus className='h-4 w-4' />
							Add Booking
						</Button>
					</div>
				</div>

				{/* Sub Header */}
				<div className='flex items-center justify-between mt-4'>

					{/* Sub Header Left */}
					<div className='flex items-center space-x-2'>
						<Button
							variant='outline'
							className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
							onClick={handleToday}>
							Today
						</Button>
						<Button
							variant='outline'
							size='icon'
							className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
                            onClick={handlePrevious}>
							<ChevronLeft className='h-4 w-4' />
						</Button>
						<Button
							variant='outline'
							size='icon'
							className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
                            onClick={handleNext}>
							<ChevronRight className='h-4 w-4' />
						</Button>
                        <h2 className="text-xl font-semibold text-gray-900 ml-4">
                            {showCurrentDate()}
                        </h2>
					</div>

					{/* Sub Header Right */}
					<div className='flex items-center space-x-2'>
						<ButtonGroup>
							<Button
								variant={viewCalendar === 'month' 
                                    ? 'default' 
                                    : 'outline'}
								className={`
                                    rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 
                                    ${viewCalendar === 'month' 
                                        ? 'bg-gray-200' 
                                        : ''}`
                                    }
                                onClick={() => setViewCalendar('month')}
                                >
								Month
							</Button>
							<Button
								variant={viewCalendar === 'week' 
                                    ? 'default' 
                                    : 'outline'}
								className={`
                                    rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 
                                    ${viewCalendar === 'week' 
                                        ? 'bg-gray-200' 
                                        : ''}`
                                    }
                                onClick={() => setViewCalendar('week')}>
								Week
							</Button>
							<Button
								variant={viewCalendar === 'day' 
                                    ? 'default' 
                                    : 'outline'}
								className={`
                                    rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 
                                    ${viewCalendar === 'day' 
                                        ? 'bg-gray-200' 
                                        : ''}`
                                    }
                                onClick={() => setViewCalendar('day')}>
								Day
							</Button>
							<Button
								variant={viewCalendar === 'agenda' 
                                    ? 'default' 
                                    : 'outline'}
								className={`
                                    rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 
                                    ${viewCalendar === 'agenda' 
                                        ? 'bg-gray-200' 
                                        : ''}`
                                    }
                                onClick={() => setViewCalendar('agenda')}>
								Agenda
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>

            {/* Calendar */}
            <div className="flex-1 overflow-hidden">
                {viewCalendar === 'month' && 
                    <MonthView 
                        currentDate={currentDate}
                         />}
                {viewCalendar === 'week' && 
                    <WeekView 
                        currentDate={currentDate}
                         />}
                {viewCalendar === 'day' && 
                    <DayView 
                        currentDate={currentDate} 
                        />}
                {viewCalendar === 'agenda' && <AgendaView />}
            </div>

            {/* Dialog Booking */}
            <DialogBooking 
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
            />
		</div>
	)
}
