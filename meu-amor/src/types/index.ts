// Tipos para a Landing Page

export interface TextItem {
  id: number;
  title: string;
  date: string;
  preview: string;
  content: string;
}

export interface NavigationButtonProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'spotify';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export type ViewType = 'home' | 'gallery' | 'texts';
