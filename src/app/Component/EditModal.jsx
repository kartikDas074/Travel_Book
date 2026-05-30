'use client'
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { FieldError, ListBox, TextArea, Select } from '@heroui/react';
import { Edit3 } from 'lucide-react';
import { useState } from "react";

export function EditModal({ data ,Updateme}) {
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const updateInfo = async (e) => {
    
    e.preventDefault();

    const formdata = new FormData(e.target);
    const dataObj = Object.fromEntries(formdata.entries());

    const id = data._id;

    const res = await Updateme(id, dataObj);
    
     if(res.modifiedCount!=0){
          setIsOpen(false);
        }
}

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger Button */}
      <Button 
        onPress={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition text-gray-700"
      >
        <Edit3 size={16} /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto" className="p-4 flex items-center justify-center">
          
          <Modal.Dialog className="sm:max-w-xl w-full max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            
            <Modal.CloseTrigger className="absolute right-4 top-4 z-10" />
            
            {/* Header section */}
            <Modal.Header className="p-6 pb-4 border-b border-gray-50 shrink-0">
              <div className="flex items-center gap-3">
                <Modal.Icon className="bg-cyan-50 text-cyan-600 p-2.5 rounded-xl block">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <div>
                  <Modal.Heading className="text-xl font-bold text-gray-900">Update The Destination</Modal.Heading>
                  <p className="mt-1 text-xs text-gray-400">
                    Update the Information of your destination package.
                  </p>
                </div>
              </div>
            </Modal.Header>
            
            {/* Modal Body */}
            <Modal.Body className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
              <form onSubmit={updateInfo} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    {/* নিয়ম: defaultValue সব সময় বাইরের TextField এ বসবে */}
                    <TextField 
                      name="destinationName" 
                      defaultValue={data?.destinationName || ""} 
                      isRequired 
                      className="w-full"
                    >
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Destination Name
                      </Label>
                      <Input
                        placeholder="e.g., Bali Paradise"
                        className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 text-sm"
                      />
                      <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>
                  </div>

                  {/* Country */}
                  <TextField 
                    name="country" 
                    defaultValue={data?.country || ""} 
                    isRequired 
                    className="w-full"
                  >
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      Country
                    </Label>
                    <Input
                      placeholder="e.g., Indonesia"
                      className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 text-sm"
                    />
                    <FieldError className="text-xs text-red-500 mt-1" />
                  </TextField>

                  {/* Category - Select Component */}
                  <div className="w-full">
                    <Select 
                      name="category" 
                      defaultValue={data?.category || ""} 
                      isRequired 
                      className="w-full" 
                      placeholder="Select category"
                     
                    >
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Category
                      </Label>
                      <Select.Trigger className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white text-left transition duration-200 text-gray-500 flex justify-between items-center text-sm">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover className="bg-white border border-gray-100 shadow-xl rounded-2xl mt-1 p-1 z-50">
                        <ListBox className="space-y-0.5">
                          {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map((item) => (
                            <ListBox.Item
                              key={item}
                              id={item}
                              textValue={item}
                              className="px-3 py-1.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-xl cursor-pointer transition flex justify-between items-center"
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
                  <TextField 
                    name="price" 
                    defaultValue={data?.price || ""} 
                    isRequired 
                    className="w-full"
                  >
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      Price (USD)
                    </Label>
                    <Input
                      type="number"
                      placeholder="1299"
                      className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 text-sm"
                    />
                    <FieldError className="text-xs text-red-500 mt-1" />
                  </TextField>

                  {/* Duration */}
                  <TextField 
                    name="duration" 
                    defaultValue={data?.duration || ""} 
                    isRequired 
                    className="w-full"
                  >
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      Duration
                    </Label>
                    <Input
                      placeholder="e.g., 7 Days / 6 Nights"
                      className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 text-sm"
                    />
                    <FieldError className="text-xs text-red-500 mt-1" />
                  </TextField>

                  {/* Departure Date */}
                  <div className="md:col-span-2">
                    <TextField 
                      name="departureDate" 
                      defaultValue={data?.departureDate || ""} 
                      isRequired 
                      className="w-full"
                    >
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Departure Date
                      </Label>
                      <Input
                        type="date"
                        className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-600 text-sm"
                      />
                      <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>
                  </div>

                  {/* Image URL */}
                  <div className="md:col-span-2">
                    <TextField 
                      name="imageUrl" 
                      defaultValue={data?.imageUrl || ""} 
                      isRequired 
                      className="w-full"
                    >
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Image URL
                      </Label>
                      <Input
                        type="url"
                        placeholder="https://example.com/bali-paradise.jpg"
                        className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 text-sm"
                      />
                      <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField 
                      name="description" 
                      defaultValue={data?.description || ""} 
                      isRequired 
                      className="w-full"
                    >
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Description
                      </Label>
                      <TextArea
                        placeholder="Describe the travel experience detailedly..."
                        className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:border-cyan-500 focus:bg-white transition duration-200 outline-none text-gray-800 min-h-[90px] text-sm resize-none"
                      />
                      <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 sticky bottom-0 bg-white">
                  <Button
                    type="submit"
                    isLoading={isPending}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 active:scale-[0.99] text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-cyan-500/20 transition duration-200 text-sm"
                  >
                    {isPending ? "Updating Package..." : "Update Travel Package"}
                  </Button>
                </div>
              </form>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}