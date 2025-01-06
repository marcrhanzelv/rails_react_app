import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe("NavBar component", () => {
  const renderNavBar = () => render(<NavBar />, { wrapper: MemoryRouter });
  test("renders both links", () => {

    renderNavBar();
    expect(screen.getByText("Posts List")).toBeInTheDocument();
    expect(screen.getByText("Create New Post")).toBeInTheDocument();
  });
})