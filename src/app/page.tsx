import { Hero } from '@/components/home/Hero';
import { ClientsMarquee } from '@/components/home/ClientsMarquee';
import { FeaturesBento } from '@/components/home/FeaturesBento';
import { ErpHiperSection } from '@/components/home/ErpHiperSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-violet-200">
      <Hero />
      <ClientsMarquee />
      <FeaturesBento />
      <ErpHiperSection />
    </main>
  );
}
