import type { Meta, StoryObj } from '@storybook/react';

import { ChemicalElement } from './ChemicalElement';

const meta = {
  title: 'ChemicalElement',
  component: ChemicalElement,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { controls: 'color' },
  },
} satisfies Meta<typeof ChemicalElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Passive: Story = {
  args: {
    chemicalSymbol: 'O',
    atomicWeight: 8,
    backgroundColor: 'white',
  },
};

export const Active: Story = {
  args: {
    chemicalSymbol: 'O',
    atomicWeight: 8,
    backgroundColor: 'cyan',
  }
};
