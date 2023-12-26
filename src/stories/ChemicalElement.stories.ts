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
    active: false,
    name: 'Oxygen',
    symbol: 'O',
    atomicNumber: 8,
  },
};

export const Active: Story = {
  args: {
    active: true,
    name: 'Oxygen',
    symbol: 'O',
    atomicNumber: 8,
  }
};
