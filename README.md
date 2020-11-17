# Bookstore app

In this doc, I would like to give you instructions to run this app and I would also like to explain my decisions I made during its development.

## How to run

0. Disclaimer: these instructions are written for macOs and linux systems.
0. Make sure you have [Node.js](https://nodejs.org/en/) installed (version 12 or above).
0. Run `git clone git@github.com:ErikCupal/bookstore-app.git && cd bookstore-app`.
0. Run `cd server && npm i && node .` in first console window.
0. Run `npm i && npm start` in second console window.
0. Open the app in [http://localhost:3000](http://localhost:3000)

## Development decisions

### TypeScript

I chose to use TypeScript instead of plain JavaScript for this project.

Several years ago, I probably wouldn't choose it, especially because Higher Order Component chains created with [recompose](https://github.com/acdlite/recompose) can't be typed correctly with TypeScript (this might have changed with latest TypeScript releases, not sure now).

However, I think it is a good choice to use TypeScript in a project today. Problems with HOCs are gone now, since we got hooks. TypeScript became pretty mature and it is very hard to have problems with missing typings today.

### Naming conventions

I generally try to keep the folder structure flat. This leads to little bit ugly component names, such as `BookEditFormFieldAuthor`. The component name is created by prefixing it with parent component, which leads to longer names, but creates unambiguous and descriptive names, therefore I usually prefer it.


### Routing

I didn't add any routing solution, since there was no need for it - I chose to implement create book and edit book views with modals without routes.

If new features would require adding a routing system, I would probably choose React Router.

### State management

Since the app uses Apollo GraphQL for data fetching/caching/normalization, there is not much of other state to handle. I used local state and combination of local state and context (for model handling).

If the requirements required sharing state between components (where local state would be unsuitable), I would choose either 1) Redux - a battle-tested solution, which I have a lot of experience with 2) Recoil - which I have some experience with, but it seems to be more lightweight / less boilerplate solution - ideal combination with Apollo GraphQL. I would avoid such a solution as MobX, because it just feels wrong to my functional programming mindset.

### Custom hooks

Generally, I prefer using custom hooks even when the hook is local specific component and is not shared between multiple components. I have two reasons for this.

Firstly, it increases readability in my opinion. When I am reading through the component, I do not for example need to know how are books sorted. Seeing `const sortedBooks = useSortedBooks(books)` is sufficient (check `BookList.tsx` component). In this example, the benefit is probably not visible enough, but if there was more logic, like in `BookEditModal.tsx`, the benefit is clear. That's the main reason why I prefer creating custom hooks even if they are not shared. Although it might seem to be redundant in some places, I like to do so for consistency.

Secondly, it is very easy to take such a custom hook later, put it in a separate file and reuse it, which I find very comfortable thing to do, because it requires only copy-pasting. I do not have to fear about breaking some existing code.

### Performance optimizations

I strictly avoid creating new data or function references in React components, since they are usually the main cause of performance problem because of broken shallow prop checking. For deriving non-primitive data, I always create a custom hook which uses `useMemo` to derive new data efficiently. Similarly, I wrap handlers and function that are passed to other components with `useCallback` to prevent creating new function references every time a component rerenders.

I also wrap components with `memo` to enable shallow prop checking and avoid redundant rerenders/reconciliation. I usually wrap all components with `memo` for consistency, even though the component is not called very often.

There is one potential performance problem in the app that I am aware of. If there were more than about 1000 books in the list, the app would be slow to render. There are two common solutions to this problem:

0. Using pagination - if the list was paginated (even local pagination would sufficient), the number of items on one page would be limited, therefore there would not be a performance problem.
0. Using list virtualization (windowing) - by rendering only currently visible part of the list, the browser would not have to render all items at once, which would eliminate performance problems. 

### Design

Although the design is not important for this task, I prefer having a prepared prototype so that I do not have to think about design too much during coding. That's why I created a [design prototype](https://xd.adobe.com/view/1fe7e963-2acb-456d-8f56-36cd992ce727-4ab4/screen/99fbeb10-7dc3-42be-9dc7-f20f8fec2c6c/) beforehand.

### Styling

I used [styled-components](https://github.com/styled-components/styled-components) for styling components. I prefer it, because in my opinion it nicely solves all common CSS problems like namespacing, prefixing, theming and style overriding.

### Theming

I am using a theme system for styling components to allow easy color and font adjustments in the future.

### Testing

I have manually tested the app in several main browsers - Chrome, Safari, IE 11, iOS Safari.

I have not written any unit or integration tests for time reasons.

### Alerts and loaders/spinners

To save time, I have not implemented any alerts for book creation/edit success or failure. Similarily, I didn't implement proper loaders across the app (only some basic ones).

### Form validation

Again, to save time, I am depending solely on HTML5 attributes for form validation. It works fine, but I would probably add custom validators and error messages for consistency across all browsers.

### Internationalization

Since there were no such requirements, I did not lose time with implementing proper internationalization.

If there was a need for it, I would chose [react-i18next](https://github.com/i18next/react-i18next) library.
