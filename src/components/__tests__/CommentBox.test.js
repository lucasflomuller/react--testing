import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

describe("<CommentBox />", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a text area and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
  });

  describe("the textarea", () => {
    beforeEach(() => {
      wrapped
        .find("textarea")
        .simulate("change", { target: { value: "New comment" } });
      wrapped.update();
    });

    it("has a text area that the user can type in", () => {
      expect(wrapped.find("textarea").prop("value")).toEqual("New comment");
    });

    it("clears the textarea after the form submit", () => {
      wrapped.find("form").simulate("submit");
      wrapped.update();

      expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
  });
});
