/**
 * @jest-environment jsdom // run in virual dom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Home from "../components/Home";

test("check if home page exits", async () => {
  const home = render(<Home />);

  const homeContent = await home.findByTestId("home");
  expect(homeContent.textContent).toContain("This is home");
});
