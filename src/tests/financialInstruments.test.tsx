import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FinancialInstrumentComponent from "../components/HomePage/FinancialInstruments";
import { fetchData } from "../utils/fetchFinancialInstrument";
import { sortData } from "../utils/sort";

vi.mock("../utils/fetchFinancialInstrument");
vi.mock("../utils/sort");

describe("FinancialInstrumentComponent", () => {
  const mockData = [
    { assetClass: "Equities", ticker: "AAPL", price: 150 },
    { assetClass: "Commodities", ticker: "GOLD", price: 1800 },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("it should render and show loading initially", async () => {
    vi.mocked(fetchData).mockResolvedValueOnce(mockData);
    vi.mocked(sortData).mockImplementation((data) => data);
    render(<FinancialInstrumentComponent />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("it should show no financial instruments", async () => {
    vi.mocked(fetchData).mockResolvedValueOnce([]);
    vi.mocked(sortData).mockImplementation((data) => data);
    render(<FinancialInstrumentComponent />);
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeInTheDocument();
    });
    expect(
      screen.getByText("No financial Instruments to see")
    ).toBeInTheDocument();
  });

  it("displays data after loading", async () => {
    vi.mocked(fetchData).mockResolvedValueOnce(mockData);
    vi.mocked(sortData).mockImplementation((data) => data);
    render(<FinancialInstrumentComponent />);
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("GOLD")).toBeInTheDocument();
  });

  it("handles fetch error", async () => {
    vi.mocked(fetchData).mockRejectedValueOnce(
      new Error("There was an error fetching the financial instruments.")
    );
    render(<FinancialInstrumentComponent />);
    await waitFor(() => {
      expect(
        screen.getByText(
          "There was an error fetching the financial instruments."
        )
      ).toBeInTheDocument();
    });
  });
});
