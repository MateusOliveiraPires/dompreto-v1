import { classNames } from '../../utils/classNames';

function Container({ children, className = '' }) {
  return <div className={classNames('container', className)}>{children}</div>;
}

export default Container;
