import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
    const submit = screen.getByRole('button');

    userEvent.type(firstName, "William");
    userEvent.type(lastName, 'Buchanan');
    userEvent.type(address, '5555 Address');
    userEvent.type(city, 'Dallas');
    userEvent.type(state, 'TX');
    userEvent.type(zip, '75555');
    userEvent.click(submit);

    await waitFor(() => {
        const success = screen.queryAllByTestId(/successMessage/i);
        const nameValue = screen.queryByText(/William Buchanan/i);
        const addressValue = screen.queryByText(/5555 Address/i);
        const cityZipValue = screen.queryByText(/Dallas, TX 75555/i)
    
        expect(success).toHaveLength(1);
        expect(nameValue).toHaveTextContent("William Buchanan");
        expect(addressValue).toHaveTextContent("5555 Address");
        expect(cityZipValue).toHaveTextContent("Dallas, TX 75555");

    });


   

    
});
