declare module '@/components/ui/button' {
    export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

declare module '@/components/ui/input' {
    export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
}

declare module '@/components/ui/select' {
    export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>>;
}

declare module '@/components/ui/popover' {
    export const Popover: React.FC<{ open: boolean, onOpenChange: (open: boolean) => void }>;
}

declare module '@/components/ui/calendar' {
    export const Calendar: React.FC<{ selected: Date, onSelectDate: (date: Date) => void }>;
}
