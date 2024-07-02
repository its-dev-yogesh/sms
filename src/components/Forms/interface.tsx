import { UseFormRegisterReturn } from 'react-hook-form';

export interface SlashInputInterface {
  url?: string;
  showLabel?: boolean;
  showIcon?: boolean;
  buttonLabel?: string;
  iconName?: string; // iconName is optional
  buttonType?: 'primary' | 'secondary' | 'tertiary'; // Specify button types
  bgColor?: string; // Should correspond to Tailwind CSS class
  textColor?: string; // Should correspond to Tailwind CSS class
  width?: number | string;
  className?: string;
  iconClass?: string;
  variant?: 'outlined' | 'text' | 'soft' | 'fill';
  showTooltip?: boolean;
  tooltipText?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  multiline?: boolean;
  icon?: React.ReactNode;
  adornment?: string;
  size?: 'small' | 'medium' | 'large';
  margin?: string;
  color?: 'primary' | 'secondary' | 'accent';
  register?: UseFormRegisterReturn;
  [key: string]: any; // Allow for additional properties
}
