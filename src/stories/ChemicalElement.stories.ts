import type { Meta, StoryObj } from '@storybook/react';

import { ChemicalElement } from './ChemicalElement';

const meta = {
  title: 'ChemicalElement',
  component: ChemicalElement,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChemicalElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Oxygen',
    symbol: 'O',
    atomicNumber: 8,
  },
};
