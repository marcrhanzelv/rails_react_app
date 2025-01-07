import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

jest.mock("../features/posts/PostsList", () => {
  const MockPostsList = () => (
    <div>Your Matcher for PostsList component here</div>
  );
  return MockPostsList;
});

jest.mock("../features/posts/PostDetails", () => {
  const MockPostDetails = () => (
    <div>Your Matcher for PostDetails component here</div>
  );
  return MockPostDetails;
});

jest.mock("../features/posts/NewPostForm", () => {
  const MockNewPostForm = () => (
    <div>Your Matcher for NewPostForm component here</div>
  );
  return MockNewPostForm;
});

jest.mock("../features/posts/PostEditForm", () => {
  const MockPostEditForm = () => (
    <div>Your Matcher for PostEditForm component here</div>
  );
  return MockPostEditForm;
});

jest.mock("../constants", () => ({
  API_URL: "http://your-api-url.com",
}));

describe("AppRoutes component", () => {
  const renderWithRouter = (ui, { route = "/" } = {}) => {
    return render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      )
    });
  };

  test("root path should render PostsList", () => {
    renderWithRouter(<AppRoutes />, { route: "/" });

    const expectedText = 'Your Matcher for PostsList component here';
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  test("post details path should render PostDetails", () => {
    renderWithRouter(<AppRoutes />, { route: "/posts/1" });

    const expectedText = 'Your Matcher for PostDetails component here';
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  test("/new path Renders NewPostForm", () => {
    renderWithRouter(<AppRoutes />, { route: "/new" });

    const expectedText = 'Your Matcher for NewPostForm component here';
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  test("/posts/:id/edit path Renders PostEditForm", () => {
    renderWithRouter(<AppRoutes />, { route: "/posts/1/edit" });

    const expectedText = 'Your Matcher for PostEditForm component here';
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
