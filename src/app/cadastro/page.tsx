"use client";

import { useState } from 'react';
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

const formSchema = z.object({
  fullName: z.string().min(5, { message: 'Nome completo é obrigatório' }),
  fatherName: z.string().min(5, { message: 'Nome do pai é necessário para conexão' }),
  motherName: z.string().min(5, { message: 'Nome da mãe é necessário para conexão' }),
  birthDate: z.string().min(1, { message: 'Data de nascimento é necessária' }),
  location: z.string().min(2, { message: 'Cidade/Estado é obrigatório' }),
  contact: z.string().optional(),
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
    // Simulating API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Registro Enviado",
        description: "Seus dados foram encaminhados para análise e inclusão na árvore familiar.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-muted/30 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <HeraldryLogo className="w-16 h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-headline font-bold text-primary mb-4 tracking-tight">Cadastro de Linhagem</h1>
          <p className="text-muted-foreground text-lg italic">
            Registre-se para preservar seu lugar na história da Família Amaral.
          </p>
        </div>

        <Card className="border-none shadow-2xl overflow-hidden">
          <div className="h-2 bg-accent w-full"></div>
          <CardHeader className="bg-white pb-8">
            <CardTitle className="text-2xl font-headline">Informações Pessoais</CardTitle>
            <CardDescription>
              Esses dados serão utilizados para conectar você aos seus antepassados.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} className="border-muted-foreground/20 focus:border-accent" />
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
                        <FormLabel className="text-primary font-bold">Nome do Pai</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome completo do pai" {...field} />
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
                        <FormLabel className="text-primary font-bold">Nome da Mãe</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome completo da mãe" {...field} />
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
                        <FormLabel className="text-primary font-bold">Data de Nascimento</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
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
                        <FormLabel className="text-primary font-bold">Cidade / Estado</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Viseu, Portugal" {...field} />
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
                      <FormLabel className="text-primary font-bold">Contato (Opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="E-mail ou Telefone" {...field} />
                      </FormControl>
                      <FormDescription>
                        Apenas para comunicações institucionais da família.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg uppercase tracking-widest transition-all"
                >
                  {isSubmitting ? "Enviando..." : "Cadastrar na Linhagem"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <div className="bg-muted p-6 text-[11px] text-center text-muted-foreground uppercase tracking-widest font-semibold border-t">
            Comprometidos com a privacidade e proteção dos dados da família.
          </div>
        </Card>
      </div>
    </div>
  );
}