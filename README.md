
# Circlepe Frontend Assignment

This repository contains completed assignment for the Frontend Developer role at Circlepe.





## Tech stack Used

- NextJs
- Tailwind CSS
- Javascript
- Vercel (Deploying)


## Challenges faced and resolutions

1. Changing the screen content and how to handle transitions and progress ? 
> On of the interesting (and quite challenging) part in this assignment was to handle the content and transitions on the page. Firstly I thought of `creating different component for each screen with different text, images and arrow positions`. But the `issue` with this approach was that `how will i change the progress of the Progress Bar and transitions will be hard beacuse a new component will be rendered each time`.

>Then I came up with the idea of `creating an object with properties for different screens (like header_text, description, imageUrl, imgLayout, arrow_position, progress )` this approach `solved the problem of hard transitions and progress tracking` As the component is same and `only the data inside the component is changing` so we can `smoothly transition the elements` based on new property values. And the `only thing left` was to include a interval which will `change the key after a fixed interval of time`, I used javascript's `setInterval() api` wrapped inside `useEffect() hook` of React. And now the content is changing at fixed interval and I added transition property to the elements (*image, arrow and progress bar*) and it was looking great 👀🥹

2. Designing the progress bar and maintaining it's size and orientation on different screen sizes
> To overcome this challenge firstly I came up with the idea of `changing the dimensions of the same progress bar on different resolutions`, but It failed due to change in orientation the relative height and width properties were changing. And to change both the properties it will require to keep track of the screen size with js and to refresh it with the screen change (*using resize event listener on document at it will rerender all the components and it can make the page slow*).

>After the failure of first idea, I tried an easier and simpler approach and `created two progress bar for different orientations` hide the horizontal one on larger screens and the vertical one on smaller screens using *tailwind's media query classes* . It worked like a charm ✨. As for the horizontal one, the width was relative to the screen and height was fixed and for vertical one, the width was fixed and height was relative to the screen.

## To run the project locally

To run the project locally, run the following commands:

```bash
git clone https://github.com/divyanshupal1/circlepe-frontend-assignment.git
cd circlepe-frontend-assignment
npm i
npm run dev
```

You can use any package manager `npm`,`pnpm` and `yarn` according to your preference.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Project is live on vercel  [Go to Deployment 🚀](https://circlepe-frontend-assignment.vercel.app/).

## Accessibility

As the peoject does not contain any interactive elements so there is no need of adding aria roles here, Images are given alt attribute for fallback text when there is issue in loading images.
