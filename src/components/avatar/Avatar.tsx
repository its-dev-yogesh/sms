import { cn } from '@/utils/cn';
import ResponsiveImage from '../ImageBox/ResponsiveImage';

interface AvatarProps {
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className = '' }) => {
  return (
    <div className="avatar">
      <div className={cn('w-10 rounded-full', className)}>
        <ResponsiveImage
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="avatar"
          ratio="1/1"
        />
      </div>
    </div>
  );
};
