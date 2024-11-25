import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { UserRound, Mail, Phone, Stethoscope } from 'lucide-react'
import { Leaf } from 'lucide-react'

export function MedicalRegistration() {
  const [formData, setFormData] = useState({
    credential: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    cannabisUse: '',
    hasLicense: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-4 pt-8 md:p-8 md:pt-12">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-teal-600" />
          <span className="text-2xl font-bold text-teal-700">CANADOCTORS</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-teal-700">Join Our Medical Cannabis Program</h1>
          <p className="text-lg text-muted-foreground">
            Connect with a network of healthcare professionals dedicated to improving patient quality of life through medical cannabis treatment.
          </p>
          <div className="grid gap-6 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <UserRound className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Professional Network</h3>
                <p className="text-sm text-muted-foreground">Join a community of certified medical practitioners</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Patient Care</h3>
                <p className="text-sm text-muted-foreground">Enhance your practice with evidence-based cannabis treatments</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Professional Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="credential">Medical Credential</Label>
                <Select
                  onValueChange={(value) => setFormData({ ...formData, credential: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your credential" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="md">MD - Medical Doctor</SelectItem>
                    <SelectItem value="np">NP - Nurse Practitioner</SelectItem>
                    <SelectItem value="pa">PA - Physician Assistant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Input
                  id="specialty"
                  placeholder="Enter your medical specialty"
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cannabisUse">How do you use medical cannabis with your patients?</Label>
                <Textarea
                  id="cannabisUse"
                  placeholder="Please describe your experience..."
                  className="min-h-[100px]"
                  onChange={(e) => setFormData({ ...formData, cannabisUse: e.target.value })}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="license"
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, hasLicense: checked as boolean })
                  }
                />
                <Label htmlFor="license">I have a Cannabis License</Label>
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}