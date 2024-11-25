'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { UserRound, Stethoscope, ArrowRight } from 'lucide-react'

interface Inputs {
  credential: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  cannabisUse: string;
  license: boolean;
}

const saveNewDoctorPr = async (data: Inputs) => {
  console.log('Saving doctor data:', data);
}

export default function DoctorFormPr() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>();

  const license = watch("license");

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    await saveNewDoctorPr(data);
    router.push({
      pathname: "/landingSent",
      query: { name: data.firstName },
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6 lg:sticky lg:top-8">
            <div className="mb-8">
              <img
                src="../images/logosCD/logopositivo.svg"
                alt="CANADOCTORS Logo"
                className="h-8 w-auto mb-12"
              />
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-teal-900/10" />
                <Image
                  src="/images/patientsregister.png"
                  alt="Doctor with patient"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-teal-800 mb-4">
                Join Our Medical Cannabis Program
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with a network of healthcare professionals dedicated to improving patient quality of life through medical cannabis treatment.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-teal-50/50 border border-teal-100">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <UserRound className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-900">Professional Network</h3>
                  <p className="text-sm text-muted-foreground">Join a community of certified medical practitioners</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-teal-50/50 border border-teal-100">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-900">Patient Care</h3>
                  <p className="text-sm text-muted-foreground">Enhance your practice with evidence-based cannabis treatments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="backdrop-blur-sm bg-white/80">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-teal-900">Professional Registration</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Complete the form below to join our network
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="credential">Medical Credential</Label>
                    <Select onValueChange={(value) => register('credential').onChange({ target: { value } })}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select your credential" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="md">MD - Medical Doctor</SelectItem>
                        <SelectItem value="np">NP - Nurse Practitioner</SelectItem>
                        <SelectItem value="pa">PA - Physician Assistant</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.credential && (
                      <span className="text-sm text-red-500">Please select your credential</span>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-white"
                        {...register('firstName', { required: true })}
                      />
                      {errors.firstName && (
                        <span className="text-sm text-red-500">This field is required</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-white"
                        {...register('lastName', { required: true })}
                      />
                      {errors.lastName && (
                        <span className="text-sm text-red-500">This field is required</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white"
                      {...register('email', { 
                        required: true, 
                        pattern: /^\S+@\S+$/i 
                      })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">Please enter a valid email</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-white"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <span className="text-sm text-red-500">This field is required</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input
                      id="specialty"
                      placeholder="Enter your medical specialty"
                      className="bg-white"
                      {...register('specialty', { required: true })}
                    />
                    {errors.specialty && (
                      <span className="text-sm text-red-500">This field is required</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cannabisUse">
                      How do you use medical cannabis with your patients?
                    </Label>
                    <Textarea
                      id="cannabisUse"
                      placeholder="Please describe your experience..."
                      className="min-h-[100px] bg-white"
                      {...register('cannabisUse', { required: true })}
                    />
                    {errors.cannabisUse && (
                      <span className="text-sm text-red-500">This field is required</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="license"
                      {...register('license')}
                    />
                    <Label htmlFor="license" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I have a Cannabis License
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold h-11"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit Registration
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}