import { render as rtlRender, screen } from "@testing-library/react";

import { Provider } from 'react-redux'
import store from '../store'
import Home from "./index";
import { ApiResponse } from "../types/types";

const render = (component: JSX.Element) => rtlRender(
  <Provider store={store()}>
    {component}
  </Provider>
)

const FAKE_API_RESPONSE: ApiResponse = {
  "products": [
      {
          "id": 1,
          "name": "Iphone 11 128 GB",
          "brand": "Apple",
          "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
          "price": 5000.00,
          "createdAt": "2022-08-21T19:30:29.567Z",
          "updatedAt": "2022-08-21T19:30:29.567Z"
      }
  ],
  "count": 1
}

describe("Home Tests", () => {
  it("Renders correctly", async () => {
    expect(render(
        <Home apiResponse={FAKE_API_RESPONSE} />
    )).toBeTruthy();
  });
  describe("Check if home components are on screen", () => {
    it("Span with MKS are on screen", async () => {
			render(
				<Home apiResponse={FAKE_API_RESPONSE} />
			);
			expect(screen.getByText("MKS")).toBeInTheDocument();
		});
    it("Span with Sistemas are on screen", async () => {
			render(
				<Home apiResponse={FAKE_API_RESPONSE} />
			);
			expect(screen.getByText("Sistemas")).toBeInTheDocument();
		});
    it("Cart Icon are on screen", async () => {
			render(
				<Home apiResponse={FAKE_API_RESPONSE} />
			);
			expect(screen.getByAltText("Cart Icon")).toBeInTheDocument();
		});
    it("Number of items in cart is 0", async () => {
			render(
				<Home apiResponse={FAKE_API_RESPONSE} />
			);
			expect(screen.getByTestId("quantity-items-on-cart")).toHaveTextContent('0');
		});
    it("Are at least 1 product on screen, so backend is functional", async () => {
			render(
				<Home apiResponse={FAKE_API_RESPONSE} />
			);
      expect(screen.getByText('Iphone 11 128 GB')).toBeInTheDocument();
      expect(screen.getByText('Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.')).toBeInTheDocument();
		});
  })
});
