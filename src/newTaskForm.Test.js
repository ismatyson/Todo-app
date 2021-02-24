import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent } from "@testing-library/react";
import newTaskForm from "./components/UI/newTaskForm";
import { queryByPlaceholderText, queryByTestId } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(
    <newTaskForm></newTaskForm>
  );
  expect(queryByTestId("addTask")).toBeTruthy();
  expect(queryByPlaceholderText("title")).toBeTruthy();
  expect(queryByPlaceholderText("description")).toBeTruthy();
  expect(queryByPlaceholderText("priority")).toBeTruthy();
});

describe("Input Value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<newTaskForm></newTaskForm>);
    const titleInput = queryByPlaceholderText("title");
    fireEvent.change(titleInput, { target: { value: "test" } });
    expect(titleInput).toBe("test");
  });
});
