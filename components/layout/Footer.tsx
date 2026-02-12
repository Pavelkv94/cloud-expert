import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-tight">CE</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Cloud Expert</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/docs/privacy-policy.pdf" className="hover:text-white transition-colors duration-150">
              {t('privacyPolicy')}
            </Link>
            <Link href="/docs/data-processing.pdf" className="hover:text-white transition-colors duration-150">
              {t('terms')}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
