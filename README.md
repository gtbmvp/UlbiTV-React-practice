# [Ulbi TV](https://youtu.be/GNrdg3PzpJQ) React practice:

Fetch posts, search by title, sort by title or desciption

### Features:

- small UI components library;
- login click sets `isAuth` Context variable to true and saves it in localStorage;
- routing with public and private routes based on `isAuth`;
- `PostService` provides `getAll`/`getById`/`getCommentsById` static methods to fetch data;
- custom hooks:
  - `useFetching` sets `isLoading` state while fetching, exports `fetching` function (wrapper around passed callback to hook), `isLoading` and `error` (`isLoading` is used to show Loader component while data is fetching);
  - `usePosts` returns memoized sorted and searched posts;
  - `usePagination` returns memoized array with pages (we map this value in `Pagination` component);
  - `useObserver` observes DOM element below posts list and execute callback (change current page number what leads to fetching more posts);
- create post in modal window (background click closes it);
- `react-transition-group` for smooth add/delete posts;
- first mounting fetch 1 page with 10 posts; changing page number (by clicking at Pagination component or by scrolling to the end) loads more posts (also you can select the amount of loading posts);
- sort and search through fetched data.
- each post has its page with comments.
