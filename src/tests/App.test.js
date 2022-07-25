import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import App from "../App";
import {clickButton, waitForPage} from "./Functions";

beforeEach(() => {
    render(<App/>);
})

test('Cookies banner is visible', () => {
    const bannerText = screen.getByText(/This website uses cookies/i);
    expect(bannerText).toBeInTheDocument();
})

test('Routing web page test', async () => {
    const road = [
        ['site design', 'How this works'],
        ['my story', 'Born curious'],
        ['contact', 'Please leave a message'],
        ['games', 'metal'],
        ['trivial', 'Set up your game'],
        ['web cams', 'Web Cam Of The Day'],
        ['radio', 'media player'],
        ['movies', 'movie platform'],
        ['weather','is going in my'],
        ['recipes', 'cooking']
    ]

    await waitForPage('manciotech');
    clickButton('enter');
    await waitForPage('site design');
    for (const comb of road) {
        clickButton(comb[0]);
        await waitForPage(comb[1]);
        clickButton('go back');
    }
},10000)


test('Not connected pages', async () => {
    await waitForPage('site design');
    clickButton('my projects');
    await waitForPage('go back');
    expect(window.location.pathname).toBe('/boo');
})
