import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default async function Header() {
  const t = await getTranslations('header');
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME ?? 'Cloud Expert';
  const loginUrl = process.env.NEXT_PUBLIC_HEADER_LOGIN_URL;

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-tight">logo</span>
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">{companyName}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {loginUrl && (
              <Link
                href={loginUrl}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-150"
              >
                {t('login')}
              </Link>
            )}
            <Button href="#contact" variant="primary">
              {t('order')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
