import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
}

interface CustomSelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  onChange,
  icon,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
        {icon && <span className="text-brand-blue">{icon}</span>}
        <span>{label}</span>
      </label>

      {/* Trigger Button - Clean rounded rectangle (10px), not pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-3.5 py-2.5 sm:py-3 bg-white rounded-lg border text-left flex items-center justify-between transition-all duration-fast text-sm font-semibold shadow-2xs ${
          isOpen
            ? 'border-brand-accent ring-2 ring-brand-accent/20 bg-brand-accent/10'
            : 'border-brand-forest/20 hover:border-brand-forest/40'
        } text-brand-forest`}
      >
        <div className="flex flex-col truncate pr-2">
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.description && (
            <span className="text-[11px] font-normal text-brand-text-tertiary truncate">
              {selectedOption.description}
            </span>
          )}
        </div>

        <div className="shrink-0 p-0.5 text-brand-forest/60 transition-transform duration-fast">
          <ChevronDown className={`w-4 h-4 transition-transform duration-fast ${isOpen ? 'rotate-180 text-brand-accent' : ''}`} />
        </div>
      </button>

      {/* Popover Menu - Clean crisp rectangle with 10px rounded corners */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-1.5 bg-white border border-brand-forest/20 rounded-lg shadow-xl overflow-hidden py-1 animate-fadeIn max-h-60 overflow-y-auto"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                type="button"
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between text-sm transition-colors ${
                  isSelected
                    ? 'bg-brand-accent/15 text-brand-forest font-bold'
                    : 'text-brand-forest/90 hover:bg-brand-page'
                }`}
              >
                <div className="flex flex-col truncate mr-2">
                  <div className="flex items-center gap-2">
                    <span className="truncate">{option.label}</span>
                    {option.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-forest text-[10px] font-mono font-bold">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  {option.description && (
                    <span className="text-xs font-normal text-brand-text-tertiary">
                      {option.description}
                    </span>
                  )}
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-brand-forest shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
