# Filtering

## What is this? 🔍

Not every fruit can be interesting to us at this time, we can choose to remove some of them from the list, sharpening the result only on what matters to us 💪.

## How it works? ⚙️

We introduce a separate reducer ([filterReducer](src/reducer/filterReducer.ts)), only for filter. It was created mainly not to be too much cluttered in a single reducer. It gaves also an interesting property: we decouple the moment we change filters from the moment in which we apply those filters.

At this time (Apr 14, 2022) there are only 2 boolean non-exclusive filters, `isTrueFruit` (sorry Apples 🍎) and `canBeEatenRaw` (I have to cut pineapples 🍍, so I put them in this category). Each value can be `[true]`, `[false]`, `[false,true]` (so, everything is accepted) and `[]` (nothing is accepted, extreme useless case).

When we change some checkbox value, we dispatch an action, `changeCheckboxFilter`, with three parameters: filter's name, the value of the checkbox that is called and the checkbox value.

The new value of the filter will be stored.

When we press the `submit` button, a new action will be invoked in [filters.tsx](src/components/Filters/Filters.tsx), this time involving the `listReducer` (i.e., the list of fruits 🍓🍋).

> `dispatch(filter(filters));`

We pass all the filters to the fruit list. In the [listReducer](src/reducer/listReducer.ts) we got a list of `availableFilters`, an object with all the filter names, that stores also the filtering function. 
When we perform a filtering action, *all* the filters should be applied *to the initial list*.

So when we perform the filter, we cycle through all the available filters, getting the filtering function from the object, and immediately invoking that on the list with the proper parameters.

And voila! One filter at the time, we got the filtered list, sharp as we need it! 🪄.


