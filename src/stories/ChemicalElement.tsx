import React from 'react';
import './chemicalElement.css';

interface ChemicalElementProps {
  /**
   * Is this the default state of this component?
   */
  active?: boolean;
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
   * Optional hover handler
   */
  onHover?: () => void;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


export const ChemicalElement = ({
  active = false,
  name = 'Oxygen',
  symbol = 'O',
  atomicNumber = 8,
  backgroundColor,
  ...props 
}: ChemicalElementProps) => {
  const mode = active ? 'storybook-chemical-element--active' : 'storybook-chemical-element--passive';
  return (
    <div
      className={["storybook-chemical-element", mode].join(' ')}
      style={{ backgroundColor }}
      {...props}  
    >
      <div id="atomic-number">{atomicNumber}</div>
      <p id="symbol">{symbol}</p>
      <p id="name">{name}</p>
    </div>
  );
};
