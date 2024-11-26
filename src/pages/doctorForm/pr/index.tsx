'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { saveNewDoctorPr } from "../../../application/api";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { UserRound, Stethoscope, ArrowRight, CalendarIcon, CheckCircle } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { Toast, ToastProvider } from "@/components/ui/toast"

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  cannabisUse: string;
  fechaReunion?: Date;
  tieneLicencia: boolean;
  numeroLicencia?: string;
  fechaCompletado: Date;
}

export default function DoctorFormPr() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>();

  const tieneLicencia = watch("tieneLicencia");
  const fechaReunion = watch("fechaReunion");

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    const formattedData = {
      ...data,
      fechaCompletado: new Date()
    };
    try {
      await saveNewDoctorPr(formattedData);
      setIsSuccess(true);
      toast({
        title: "Registro exitoso",
        description: (
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <span>Su información ha sido enviada correctamente.</span>
          </div>
        ),
        duration: 5000,
      });
      setTimeout(() => {
        router.push('/');
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar su información. Por favor, intente de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6 lg:sticky lg:top-8">
              <div className="mb-8">
                <Image
                  src="../images/logosCD/logopositivo.svg"
                  alt="CANADOCTORS Logo"
                  width={200}
                  height={50}
                  className="h-8 w-auto mb-12"
                />
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-teal-900/10" />
                  <Image
                    src="/images/patientsregister.png"
                    alt="Doctor con paciente"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-teal-800 mb-4">
                  Únete a Nuestro Programa de Cannabis Medicinal
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Conéctate con una red de profesionales de la salud dedicados a mejorar la calidad de vida de los pacientes a través del tratamiento con cannabis medicinal.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-teal-50/50 border border-teal-100">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                    <UserRound className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Red Profesional</h3>
                    <p className="text-sm text-muted-foreground">Únete a una comunidad de médicos certificados</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-teal-50/50 border border-teal-100">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Atención al Paciente</h3>
                    <p className="text-sm text-muted-foreground">Mejora tu práctica con tratamientos de cannabis basados en evidencia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="backdrop-blur-sm bg-white/80">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-teal-900">Registro Profesional</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario a continuación para unirse a nuestra red
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input
                          id="firstName"
                          placeholder="Ingrese su nombre"
                          className="bg-white"
                          {...register('firstName', { required: true })}
                        />
                        {errors.firstName && (
                          <span className="text-sm text-red-500">Este campo es requerido</span>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input
                          id="lastName"
                          placeholder="Ingrese su apellido"
                          className="bg-white"
                          {...register('lastName', { required: true })}
                        />
                        {errors.lastName && (
                          <span className="text-sm text-red-500">Este campo es requerido</span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        className="bg-white"
                        {...register('email', { 
                          required: true, 
                          pattern: /^\S+@\S+$/i 
                        })}
                      />
                      {errors.email && (
                        <span className="text-sm text-red-500">Por favor ingrese un correo electrónico válido</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Número de Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Ingrese su número de teléfono"
                        className="bg-white"
                        {...register('phone', { required: true })}
                      />
                      {errors.phone && (
                        <span className="text-sm text-red-500">Este campo es requerido</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialty">Especialidad</Label>
                      <Input
                        id="specialty"
                        placeholder="Ingrese su especialidad médica"
                        className="bg-white"
                        {...register('specialty', { required: true })}
                      />
                      {errors.specialty && (
                        <span className="text-sm text-red-500">Este campo es requerido</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fechaReunion">Fecha y Hora de Reunión</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !fechaReunion && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {fechaReunion ? format(fechaReunion, "PPP HH:mm") : <span>Seleccione fecha y hora</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={fechaReunion}
                            onSelect={(date) => {
                              if (date) {
                                const now = new Date();
                                date.setHours(now.getHours(), now.getMinutes());
                                setValue('fechaReunion', date);
                              }
                            }}
                            initialFocus
                          />
                          <div className="p-3 border-t">
                            <Label htmlFor="time">Hora</Label>
                            <Input
                              id="time"
                              type="time"
                              value={fechaReunion ? format(fechaReunion, "HH:mm") : ""}
                              onChange={(e) => {
                                const [hours, minutes] = e.target.value.split(':');
                                const newDate = new Date(fechaReunion || new Date());
                                newDate.setHours(parseInt(hours), parseInt(minutes));
                                setValue('fechaReunion', newDate);
                              }}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cannabisUse">
                        ¿Cómo utiliza el cannabis medicinal con sus pacientes?
                      </Label>
                      <Textarea
                        id="cannabisUse"
                        placeholder="Por favor describa su experiencia..."
                        className="min-h-[100px] bg-white"
                        {...register('cannabisUse', { required: true })}
                      />
                      {errors.cannabisUse && (
                        <span className="text-sm text-red-500">Este campo es requerido</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="tieneLicencia"
                          {...register('tieneLicencia')}
                        />
                        <Label htmlFor="tieneLicencia" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Tengo una Licencia de Cannabis
                        </Label>
                      </div>
                      {tieneLicencia && (
                        <div className="mt-2">
                          <Label htmlFor="numeroLicencia">Número de Licencia de Cannabis</Label>
                          <Input
                            id="numeroLicencia"
                            placeholder="Ingrese su número de licencia"
                            className="bg-white mt-1"
                            {...register('numeroLicencia', { required: tieneLicencia })}
                          />
                          {errors.numeroLicencia && (
                            <span className="text-sm text-red-500">Este campo es requerido si tiene licencia</span>
                          )}
                        </div>
                      )}
                    </div>
                    <input
                      type="hidden"
                      {...register('fechaCompletado')}
                      value={new Date().toISOString()}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold h-11"
                      disabled={isSubmitting || isSuccess}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : isSuccess ? (
                        <span className="flex items-center justify-center gap-2">
                          Registro Exitoso
                          <CheckCircle className="w-5 h-5" />
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Enviar Registro
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
        <div className="fixed bottom-4 right-4 z-50">
          <Toast />
        </div>
      </div>
    </ToastProvider>
  )
}