export interface ButtonInterface {
  url?: string;
  showLabel?: boolean;
  showIcon?: boolean;
  buttonLabel?: string;
  iconName?: string; // iconName is optional
  buttonType?: 'primary' | 'secondary' | 'tertiary'; // Specify button types
  bgColor?: string; // Should correspond to Tailwind CSS class
  textColor?: string; // Should correspond to Tailwind CSS class
  icon?: string;
  width?: number | string;
  className?: string;
  iconClass?: string;
  variant?: 'outlined' | 'text' | 'soft' | 'fill';
  size?: 'small' | 'medium' | 'large';
  showTooltip?: boolean;
  tooltipText?: string;
  [key: string]: any; // Allow for additional properties
}
