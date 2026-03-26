"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { HeraldryLogo } from '@/components/HeraldryLogo';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, UserPlus, MapPin, ArrowLeft } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(5, { message: 'Nome completo é obrigatório' }),
  fatherName: z.string().min(5, { message: 'Nome do pai é necessário para conexão' }),
  motherName: z.string().min(5, { message: 'Nome da mãe é necessário para conexão' }),
  birthDate: z.string().min(1, { message: 'Data de nascimento é necessária' }),
  location: z.string().min(2, { message: 'Cidade/Estado é obrigatório' }),
  contact: z.string().email({ message: 'E-mail inválido' }),
});

export default function CadastroPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      fatherName: '',
      motherName: '',
      birthDate: '',
      location: '',
      contact: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Petição de Linhagem Enviada",
        description: "Seus dados foram encaminhados ao conselho familiar para verificação e inclusão na árvore.",
      });
      form.reset();
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-[#fcfaf2] py-12 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-2xl mb-8">
        <Link href="/">
          <Button variant="ghost" className="text-primary hover:text-accent font-bold gap-2 group p-0 hover:bg-transparent">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Voltar ao site
          </Button>
        </Link>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-8">
          <HeraldryLogo className="w-20 h-28 mx-auto mb-6 drop-shadow-2xl" />
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2 tracking-tight uppercase">
            Unir-se à Linhagem
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
        </div>

        <Card className="border-2 border-accent/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden rounded-[3rem] bg-white">
          <div className="h-3 bg-primary w-full"></div>
          <CardHeader className="pt-8 pb-4 text-center">
            <CardTitle className="text-xl font-headline text-primary flex items-center justify-center gap-2">
              <ShieldCheck className="text-accent w-5 h-5" /> Registro de Descendente
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                        <UserPlus className="w-3 h-3 text-accent" /> Nome Completo
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} className="bg-muted/30 border-primary/10 focus:border-accent py-5 rounded-2xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fatherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-widest text-[10px]">Nome do Pai</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome do progenitor" {...field} className="bg-muted/30 border-primary/10 rounded-2xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="motherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-widest text-[10px]">Nome da Mãe</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da genitora" {...field} className="bg-muted/30 border-primary/10 rounded-2xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-widest text-[10px]">Data de Nascimento</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="bg-muted/30 border-primary/10 rounded-2xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-accent" /> Localidade
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Cidade, Estado" {...field} className="bg-muted/30 border-primary/10 rounded-2xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold uppercase tracking-widest text-[10px]">E-mail de Contato</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} className="bg-muted/30 border-primary/10 rounded-2xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-7 text-lg uppercase tracking-[0.2em] transition-all rounded-full shadow-lg"
                >
                  {isSubmitting ? "Processando..." : "Protocolar Registro"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <div className="bg-primary/5 p-4 text-[9px] text-center text-primary/60 uppercase tracking-[0.3em] font-bold border-t border-accent/10">
            Tradição - Honra - Identidade
          </div>
        </Card>
      </div>
    </div>
  );
}
