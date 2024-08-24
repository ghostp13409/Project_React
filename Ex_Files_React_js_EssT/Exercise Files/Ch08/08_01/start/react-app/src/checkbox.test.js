import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./checkbox";


test("selecting checkbox should change the value", ()=>{
    const {getByLabelText} = render(<Checkbox />);
    const checkbox = getByLabelText(/Unchecked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})