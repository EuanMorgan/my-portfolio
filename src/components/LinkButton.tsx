import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '~/utils/classNames';

const linkButtonVariants = cva(
  'px-7 py-3 flex items-center active:scale-105 cursor-pointer gap-2 rounded-full outline-none transition',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white hover:bg-gray-950',
        secondary:
          'bg-white text-slate-800 hover:bg-gray-50 border border-black/10 hover:bg-opacity-[60%]',
      },
      scale: {
        md: 'focus:scale-110 hover:scale-110',
        lg: 'hover:scale-115 focus:scale-115',
      },
    },
    defaultVariants: {
      variant: 'default',
      scale: 'md',
    },
  }
);

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkButtonVariants> {
  asElement?: React.ElementType;
}

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({className, variant, asElement, ...props}, ref) => {
    const Comp = asElement ? asElement : 'a';
    return (
      <Comp
        className={cn(linkButtonVariants({variant, className}))}
        ref={ref}
        {...props}
      />
    );
  }
);
LinkButton.displayName = 'LinkButton';

export {LinkButton, linkButtonVariants};
