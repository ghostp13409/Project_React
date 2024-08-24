import { useReducer } from "react";

export function Checkbox() {
    const [checked, setChecked] = useReducer(
        (checked) => !checked,
        false
    );
    return(
        <>
            <input 
                type="checkbox"
                checked={checked}
                onChange={() => setChecked()}
                name="checkbox"
                id="checkbox"
            />
            <label htmlFor="checkbox">
                {checked ? "Checked" : "Unchecked"}
            </label>
        </>
    )
}