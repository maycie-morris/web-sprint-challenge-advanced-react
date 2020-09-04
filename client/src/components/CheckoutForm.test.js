import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)

    fireEvent.change(firstNameInput, {target: {value: "Maycie"} })
    fireEvent.change(lastNameInput, {target: {value: "Morris"} })
    fireEvent.change(addressInput, {target: {value: "123 Address St"} })
    fireEvent.change(cityInput, {target: {value: "City"} })
    fireEvent.change(stateInput, {target: {value: "State"} })
    fireEvent.change(zipInput, {target: {value: "12345"} })

    const submitButton = screen.getByRole("button", /checkout/i)
    fireEvent.click(submitButton)


    expect(screen.getByText(/Maycie/i)).toBeInTheDocument()
    expect(screen.getByText(/Morris/i)).toBeInTheDocument()
    expect(screen.getByText(/123 Address St/i)).toBeInTheDocument()
    expect(screen.getByText(/City/i)).toBeInTheDocument()
    expect(screen.getByText(/State/i)).toBeInTheDocument()
    expect(screen.getByText(/12345/i)).toBeInTheDocument()


});
