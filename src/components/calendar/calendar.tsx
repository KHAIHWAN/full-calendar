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

export default function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date())

	const getMonth = () => {
		return currentDate.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
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
						<Button variant='outline' className='border-gray-300'>
							Today
						</Button>
						<div className='flex items-center space-x-2'>
							<Button variant='outline' size='icon' className='border-gray-300'>
								<ChevronLeft />
							</Button>
							<Button variant='outline' size='icon' className='border-gray-300'>
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
							<Button variant='outline' className='border-gray-300'>Month</Button>
							<Button variant='outline' className='border-gray-300'>Week</Button>
							<Button variant='outline' className='border-gray-300'>Day</Button>
                            <Button variant='outline' className='border-gray-300'>Agenda</Button>
						</ButtonGroup>
					</div>
				</div>
			</header>

            <MonthView />
		</div>
	)
}
