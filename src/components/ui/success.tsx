import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { siteSettings } from '@settings/site-settings';

const Success: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  href = siteSettings.success.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn('inline-flex focus:outline-none', className)}
      {...props}
    >
      <Image
        src={siteSettings.success.url}
        alt={siteSettings.success.alt}
        height={siteSettings.success.height}
        width={siteSettings.success.width}
        layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default Success;
