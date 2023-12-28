import React from 'react';
import './chemicalElement.css';

interface ChemicalElementProps {
  /**
   * What is the name of this element?
   */
  name?: string;
  /**
   * What is the symbol of this element?
   */
  symbol?: string;
  /**
   * What is the atomic number of this element?
   */
  atomicNumber?: number;
  /**
   * What is the chemical group block of this element?
   */
  backgroundColor?: string;
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
    <div
      className="storybook-chemical-element"
      style={{ backgroundColor }}
      {...props}  
    >
      <div id="atomic-number">{atomicNumber}</div>
      <p id="symbol">{symbol}</p>
      <p id="name">{name}</p>
    </div>
  );
};
