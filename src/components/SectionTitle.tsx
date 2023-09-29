import {cn} from '~/utils/classNames';

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn('text-3xl font-medium capitalize mb-8', className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
