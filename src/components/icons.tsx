interface IconProps {
  className?: string;
  color?: string;
}

export function Trophy({ className = "w-6 h-6", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L8 6V8H16V6L12 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 8H19V10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10V8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 17V21M8 21H16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8H3C3 10 4 11 5 11M19 8H21C21 10 20 11 19 11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircle({ className = "w-4 h-4", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M5 8L7 10L11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XCircle({ className = "w-4 h-4", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M6 6L10 10M10 6L6 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Clock({ className = "w-4 h-4", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M8 5V8L10 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Warning({ className = "w-4 h-4", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2L1 14H15L8 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M8 6V9M8 11.5V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Football({ className = "w-5 h-5", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.2" fill="none" />
      <path
        d="M10 2V6M10 14V18M2 10H6M14 10H18M4.93 4.93L7.76 7.76M12.24 12.24L15.07 15.07M15.07 4.93L12.24 7.76M7.76 12.24L4.93 15.07"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
