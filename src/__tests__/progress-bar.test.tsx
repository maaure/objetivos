import { ProgressBar } from "@/components/ui/progress-bar";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(cleanup);

describe("ProgressBar", () => {
  it("renders correctly with given progress", () => {
    render(<ProgressBar progress={50} />);
    const progressBar = screen.getByText("50%");
    expect(progressBar).toBeInTheDocument();
  });

  it("handles edge case when progress is 0", () => {
    render(<ProgressBar progress={0} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("rounds up decimal progress values", () => {
    render(<ProgressBar progress={49.6} />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("applies correct width style based on progress", () => {
    render(<ProgressBar progress={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveStyle("width: 50%");
  });

  it("handles edge case when progress is 100", () => {
    render(<ProgressBar progress={100} />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });
});
