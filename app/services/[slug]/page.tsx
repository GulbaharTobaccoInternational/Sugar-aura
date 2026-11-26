import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/content/services';
import { HalwaPage,HairPage,NailsPage } from '@/components/phase-two/service-pages';
export const dynamicParams=false;
export function generateStaticParams(){return services.map(service=>({slug:service.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const service=services.find(item=>item.slug===slug);return{title:service?.title,description:service?.description,alternates:{canonical:`/services/${slug}`},openGraph:{title:service?.title,description:service?.description,images:service?[{url:service.image,alt:service.imageAlt}]:[]}};}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;if(slug==='sudanese-halwa')return <HalwaPage/>;if(slug==='hair-styling')return <HairPage/>;if(slug==='manicure-pedicure')return <NailsPage/>;notFound();}
