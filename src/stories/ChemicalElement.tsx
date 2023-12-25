import React from 'react';

interface ChemicalElementProps {
  /**
   * What element does this symbol abbreviate?
   */
  chemicalSymbol: string;
  /**
   * What is this element's atomic weight?
   */
  atomicWeight: number;
  /**
   * What is the background color of the grouping this element belongs to?
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
  chemicalSymbol = 'O',
  atomicWeight = 8,
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
      {chemicalSymbol + atomicWeight}
    </button>
  );
};
