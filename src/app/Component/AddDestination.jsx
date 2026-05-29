"use client";

import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import { useState } from 'react';

const AddDestination = ({addDes}) => {
   
    const [isPending, setIsPending] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            
            {/* ফোরম হেডার */}
            <div className="max-w-4xl w-full text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Add A New <span className="text-cyan-600">Destination</span>
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    Create a premium travel package for world explorers.
                </p>
            </div>

            {/* মেইন ফর্ম কার্ড */}
            <Card className="max-w-4xl w-full bg-white border border-gray-100 shadow-xl shadow-gray-100/40 rounded-3xl overflow-hidden">
                <form action={addDes} className="p-6 sm:p-10 space-y-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired className="w-full">
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Destination Name</Label>
                                <Input 
                                    placeholder="e.g., Bali Paradise" 
                                    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800" 
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired className="w-full">
                            <Label className="text-sm font-semibold text-gray-700 mb-2 block">Country</Label>
                            <Input 
                                placeholder="e.g., Indonesia" 
                                className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800" 
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Category - Select Component */}
                        <div className="w-full">
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Category</Label>
                                <Select.Trigger className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white text-left transition duration-200 text-gray-500 flex justify-between items-center">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                
                                <Select.Popover className="bg-white border border-gray-100 shadow-xl rounded-2xl mt-1 p-1">
                                    <ListBox className="space-y-0.5">
                                        {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map((item) => (
                                            <ListBox.Item 
                                                key={item} 
                                                id={item} 
                                                textValue={item}
                                                className="px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-xl cursor-pointer transition flex justify-between items-center"
                                            >
                                                {item}
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired className="w-full">
                            <Label className="text-sm font-semibold text-gray-700 mb-2 block">Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired className="w-full">
                            <Label className="text-sm font-semibold text-gray-700 mb-2 block">Duration</Label>
                            <Input
                                placeholder="e.g., 7 Days / 6 Nights"
                                className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired className="w-full">
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Departure Date</Label>
                                <Input 
                                    type="date" 
                                    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-600" 
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired className="w-full">
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800"
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired className="w-full">
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience detailedly..."
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 min-h-[120px] resize-y"
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            isLoading={isPending}
                            className="w-full bg-cyan-500 hover:bg-cyan-600 active:scale-[0.99] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition duration-200 text-base"
                        >
                            {isPending ? "Adding Package..." : "Add Travel Package"}
                        </Button>
                    </div>

                </form>
            </Card>
        </div>
    );
};

export default AddDestination;