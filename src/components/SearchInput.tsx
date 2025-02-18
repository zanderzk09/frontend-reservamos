//ESTE ARCHIVO FUE RESULTADO DE LA INSTRUCCIÓN PROPORCIONADAD A LA IA PARA DIVIDIR LA LÓGICA DEL CONTROLADOR EN ARCHIVOS MÁS PEQUEŃOS Y ESCALABLES.

import { FaTimes } from 'react-icons/fa';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchInput = ({ value, onChange, onClear }: SearchInputProps) => (
  <div className="relative">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Escribe una ciudad"
      className="w-full p-1 rounded-md border text-sm font-light font-Montserrat border-gray-600 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-6 transition-all duration-300 ease-in-out"
    />
    {value && (
      <button onClick={onClear} className="absolute top-[5px] right-[5px] text-gray-400 hover:text-white">
        <FaTimes size={20} />
      </button>
    )}
  </div>
);
