import {screen, waitFor} from "@testing-library/react";

export const waitForPage = async function (name) {
    await waitFor(() => {
        expect(screen.getByText(new RegExp(name, "i"))).toBeInTheDocument();
    })
}

export const clickCookiesConsent = function (){
    screen.getByRole('button', {name: /accept/i}).click();
}

export const clickButton = function (name){
    const enter = screen.getByRole('button', {name: new RegExp(name, 'i')});
    enter.click();
}