import cn from 'classnames';

export const Button: React.FC<{
  type?: string,
  size?: string,
  disabled?: boolean,
  onClick: () => void
}> = ({
  children,
  type: buttonType = 'primary',
  size = 'normal',
  disabled,
  onClick
}) => (
  <button
    type="button"
    className={cn([
      'button',
      `button_${buttonType}`,
      `button_${size}`,
    ])}
    disabled={disabled}
    onClick={onClick}
  >
    { children }
  </button>
)