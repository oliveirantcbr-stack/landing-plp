import React from 'react';
import { cn } from '@/lib/utils';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number; // Kept for backward compatibility
  direction?: 'horizontal' | 'vertical'; // Kept for backward compatibility
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  // Symmetrically duplicate the children and apply padding-right to equal the gap.
  // This ensures that the two cloned tracks have exactly the same size including spacing,
  // making a translation of exactly -50% perfectly seamless at any viewport width.
  return (
    <div 
      className={cn('overflow-hidden w-full flex select-none pointer-events-auto', className)}
      style={{
        ['--marquee-duration' as any]: `${duration}s`,
      }}
    >
      <div
        className={cn(
          'flex flex-row w-max shrink-0',
          reverse ? 'animate-marquee-horizontal-reverse' : 'animate-marquee-horizontal',
          'hover:[animation-play-state:paused]' // Premium micro-interaction: pauses marquee on hover
        )}
      >
        {/* Track 1 */}
        <div 
          className="flex shrink-0 items-center" 
          style={{ 
            gap: `${gap}px`, 
            paddingRight: `${gap}px` 
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<React.ImgHTMLAttributes<HTMLImageElement>>(child) && 
                child.type === 'img') {
              return React.cloneElement(child, { 
                loading: 'lazy' as const,
                ...child.props 
              });
            }
            return child;
          })}
        </div>
        {/* Track 2 (cloned seamlessly) */}
        <div 
          className="flex shrink-0 items-center" 
          style={{ 
            gap: `${gap}px`, 
            paddingRight: `${gap}px` 
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<React.ImgHTMLAttributes<HTMLImageElement>>(child) && 
                child.type === 'img') {
              return React.cloneElement(child, { 
                loading: 'lazy' as const,
                ...child.props 
              });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
}