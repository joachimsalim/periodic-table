import React from 'react';

interface ChemicalElementProps {
  /**
   * What is the name of this element?
   */
  name: string,
  /**
   * What is the symbol of this element?
   */
  symbol: string;
  /**
   * What is the atomic number of this element?
   */
  atomicNumber: number;
  /**
   * What is the chemical group block of this element?
   */
  backgroundColor: string;
  /**
   * Optional hover handler
   */
  onHover?: () => void;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


export const ChemicalElement = ({
  name = 'Oxygen',
  symbol = 'O',
  atomicNumber = 8,
  backgroundColor,
  ...props 
}: ChemicalElementProps) => {
  return (
    <button
      type="button"
      className="chemicalElement"
      style={{ backgroundColor }}
      {...props}  
    >
      {symbol + ' ' + atomicNumber + ' - ' + name}
    </button>
  );
};
