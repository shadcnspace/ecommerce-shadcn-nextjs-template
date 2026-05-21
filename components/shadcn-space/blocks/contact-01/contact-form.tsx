"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  country: string
  message: string
  terms: boolean
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
    terms: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="w-full">
      <Card className="animate-in gap-6 rounded-2xl border p-8 ring-0 delay-100 duration-1000 ease-in-out fill-mode-both slide-in-from-right-10 fade-in md:gap-8">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold text-primary">
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {/* form inputs */}
                <div className="grid grid-cols-1 gap-6 sm:gap-4 lg:grid-cols-2">
                  <div>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="h-9 shadow-xs dark:bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="h-9 shadow-xs dark:bg-background"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    id="email"
                    name="email"
                    placeholder="youremail@website.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-9 shadow-xs dark:bg-background"
                    required
                  />
                </div>

                <div>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, country: value ?? "" }))
                    }
                  >
                    <SelectTrigger
                      id="country"
                      className="h-9! w-full shadow-xs dark:bg-background"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">
                        United States
                      </SelectItem>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you? (Order inquiry, sizing, etc.)"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-20 resize-none shadow-xs dark:bg-background"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-normal text-primary select-none"
                  >
                    I have read and acknowledge the Terms and Conditions
                  </Label>
                </div>
              </div>
              {/* submit button */}
              <Button
                type="submit"
                className={cn(
                  "group relative h-14 w-full overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-4",
                  "cursor-pointer"
                )}
              >
                <span className="relative z-10 transition-all duration-500">
                  Send Message
                </span>
                <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactForm
