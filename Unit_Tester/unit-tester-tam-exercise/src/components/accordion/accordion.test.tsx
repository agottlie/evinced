import React from 'react';
import { render, screen } from '@testing-library/react';
import { Accordion, AccordionItem } from './accordion';
import userEvent from '@testing-library/user-event';
import EvincedUT from "@evinced/unit-tester";


test('renders accordion with multiple items', () => {
  render(
    <Accordion>
      <AccordionItem title="Item 1">Content 1</AccordionItem>
      <AccordionItem title="Item 2">Content 2</AccordionItem>
      <AccordionItem title="Item 3">Content 3</AccordionItem>
    </Accordion>
  );

  const item1Button = screen.getByText('Item 1');
  const item2Button = screen.getByText('Item 2');
  const item3Button = screen.getByText('Item 3');

  expect(item1Button).toBeInTheDocument();
  expect(item2Button).toBeInTheDocument();
  expect(item3Button).toBeInTheDocument();
});

test('expands and collapses accordion item on button click', async () => {
  const user = userEvent.setup();

  render(
    <Accordion>
      <AccordionItem title="Item 1">Content 1</AccordionItem>
    </Accordion>
  );

  const itemButton = screen.getByText('Item 1');
  expect(itemButton).toHaveAttribute('aria-expanded', 'false');
  await user.click(itemButton);
  expect(itemButton).toHaveAttribute('aria-expanded', 'true');
  await user.click(itemButton);
  expect(itemButton).toHaveAttribute('aria-expanded', 'false');
});

it("Evinced unit tester basic example", async () => {
  render(
    <Accordion>
      <AccordionItem title="Item 1">Content 1</AccordionItem>
      <AccordionItem title="Item 2">Content 2</AccordionItem>
      <AccordionItem title="Item 3">Content 3</AccordionItem>
    </Accordion>
  );
  
  const myComponent = screen.getByText('Item 1');

  // Scan for a11y issues and assert on the results
  const results = await EvincedUT.analyzeAccordion(myComponent);
  expect(results).toHaveNoFailures();
});
