"use client"

// React
import { useState } from "react"

// Shadcn UI Components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Toggle } from "@radix-ui/react-toggle"
import { Button } from "@/components/ui/button"

interface DialogBookingProps {
	isOpen: boolean
	onClose: () => void
}

export default function DialogBooking({ isOpen, onClose }: DialogBookingProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px] bg-white">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-black">
                        Booking Room
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        Please fill in the form below to book a room.
                    </DialogDescription>
				</DialogHeader>

                {/* Form Booking */}
                <div className="space-y-4 py-4">
                    {/* Title */}
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-black">
                            Title
                        </Label>
                        <Input id="title" type="text" placeholder="Enter Booking Title" className="border-gray-300" />
                    </div>

                    {/* Room Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="room" className="text-black">
                            Room
                        </Label>
                        <Select>
                            <SelectTrigger className="border-gray-300">
                                <SelectValue placeholder="Select a room" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="room-1">Room 1</SelectItem>
                                <SelectItem value="room-2">Room 2</SelectItem>
                                <SelectItem value="room-3">Room 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* All Day Toggle */}
                    <div className="flex items-center space-x-2">
                        <Input type="checkbox" id="isAllDay" className="w-4 h-4" />
                        <Label htmlFor="isAllDay" className="text-black cursor-pointer">
                            All Day
                        </Label>
                    </div>

                    {/* Date Range */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="startDate" className="text-black">
                                Start Date
                            </Label>
                            <Input id="startDate" type="date" className="border-gray-300" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="endDate" className="text-black">
                                End Date
                             </Label>
                            <Input id="endDate" type="date" className="border-gray-300" />
                        </div>
                    </div>
                </div>


                <DialogFooter className='flex justify-between'>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={onClose} className="border-gray-300">Cancel</Button>
                        <Button className="bg-black hover:border-gray-800 text-white">Create</Button>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}