export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

export interface IconProps {
  name: 'matryoshka' | 'compass' | 'person' | 'people' | 'team';
  className?: string;
}

export interface WavyDividerProps {
  variant?: 'white' | 'black';
  className?: string;
}

