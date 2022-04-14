# Sorting 🔁

## What is this? 🔍

When you got a list, you need to order it by some criteria.

In case of fruit, it could be calories 🔥, water contained 💧 and so on. Sorry, no sorting by taste is available 😞

## How it works? ⚙️

We create a reducer for the list of fruit (you can find it [here](src/reducer/listReducer.ts)).

We introduce a sorting action (`sortBy`) with a parameter, a simple label with fixed values.

When the action is emitted by [`filters.tsx`](src/components/Filters/Filters.tsx) component, reducer intercepts it. It choose the right sorting function based on the label and it returns the new state of the store, based on the sorted list.

## Alternatives

We can pass directly a _sorting function_, instead of a label, but it's wrong, because a function is not serializable (and the data passed via redux should be so).
blablabla
