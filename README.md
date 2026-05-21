# Dynamic Table Readme

By: Ian Bruns

## Steps to run

## My Approach

Most of my time in the drafting process was spent thinking about the back end end and the databasing. I wanted to create a database structure that allowed for the most extendability and made open to future considerations. In this I created 2 tables, one for the forms (as a json binary string) and a second for the elements themselves. This also allows for "custom" ui (still using the HTML conventions)

This is achieved bysetting a "config" json object in both the forms and elements tables, and then coalesing on them - using user settings as the tiebreaker if any conflicts arise

From there I create a series of switch and case statements allowing us to render components for the html elements

## What I left out

My submit handlers have packaged the data, but I have haven't hooked them up to any tables. I save this for last because I think an agnostic fron end like a dynamic form wouldn't care too much about where the data is going after and so as long as it knows how to get the formdata to a parent component said parent component will know what to do with it (for example, the form could submit to an endpoint, save to localStorage, render new ui entirely!)

## Next steps

Thanks to the work I did creating extendable elements all of my future state ideas I already have started to think where things could live

If I had more time I would have created a form using `<DynamicForm />` that could create dynamic forms. I would have to add a column in my ui for radio buttons which can allow the user to select which element it is and what key it belongs to. then the parent component could package that into the formdata json

I would love for the ability to pass custom stylesheets, currently you can throw a `className` into the `config` in the form table and that would take, but since the components have their own label just putting in classNames affects the entire element, not just what you think it does. However the config does allow for us to open up to that constraint

I think with more time I would also add more components to the table and with that create more forms to demo
