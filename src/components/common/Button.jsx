import { classNames } from '../../utils/classNames';

function Button({ as = 'button', children, className = '', variant = 'primary', ...props }) {
  const Component = as;

  return (
    <Component
      className={classNames(
        'button',
        variant === 'primary' && 'button-primary',
        variant === 'secondary' && 'button-secondary',
        variant === 'light' && 'button-light',
        variant === 'whatsapp' && 'button-whatsapp',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
