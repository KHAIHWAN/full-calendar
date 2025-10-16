"use client"

// React
import { useState } from "react"

// Shadcn UI Components
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

// Lucide Icon
import { CalendarPlus, ChevronLeft, ChevronRight } from "lucide-react"

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date())

    const handleToday = () => {
        setCurrentDate(new Date())
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

    const showCurrentDate = () => {
        return currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
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
						<Button className='rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600'>
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
                            onClick={handlePreviousMonth}>
							<ChevronLeft className='h-4 w-4' />
						</Button>
						<Button
							variant='outline'
							size='icon'
							className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
                            onClick={handleNextMonth}>
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
								variant='outline'
								className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'>
								Month
							</Button>
							<Button
								variant='outline'
								className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'>
								Week
							</Button>
							<Button
								variant='outline'
								className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'>
								Day
							</Button>
							<Button
								variant='outline'
								className='rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'>
								Agenda
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>

            {/* Calendar */}
            <div className="flex-1 overflow-hidden">
                Days Calendar
            </div>
		</div>
	)
}
