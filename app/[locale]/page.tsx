import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieNotice from '@/components/layout/CookieNotice';
import HeroSection from '@/components/sections/HeroSection';
import TabsSection from '@/components/sections/TabsSection';
import GpuVmsSection from '@/components/sections/GpuVmsSection';
import MachineLearningSection from '@/components/sections/MachineLearningSection';
import GpuBenefitsSection from '@/components/sections/GpuBenefitsSection';
import ItSolutionsSection from '@/components/sections/ItSolutionsSection';
import CtaSection from '@/components/sections/CtaSection';
import ContactSection from '@/components/sections/ContactSection';
import SchemaOrg from '@/components/SchemaOrg';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SchemaOrg />
      <Header />
      <main>
        <HeroSection />
        <TabsSection />
        <GpuVmsSection />
        <MachineLearningSection />
        <GpuBenefitsSection />
        <ItSolutionsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
