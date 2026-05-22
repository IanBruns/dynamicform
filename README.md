# Dynamic Table Readme

By: Ian Bruns

## Steps to run

### Install

Once you clone this repository just run `yarn install` to install all dependencies, and `yarn run dev` to start the dev environment

Supabase needs a `.env.local` file with 2 keys, please ask the repo owner for access

### Login

To access any page but the home directory a username and password will be needed. This is ONLY saved on the supabase database project and after you are done, please contact repo owner to be removed if needed

## My Approach

Most of my time in the drafting process was spent thinking about the back end/databasing. I wanted to create a database structure that is open for the most extendability and was made open to future considerations. In this I created 2 tables, one for the forms (saved as a json binary string) and a second for the form elements themselves. This also allows for "custom" ui (still using HTML conventions)

This is achieved by setting a "config" json object in both the forms and elements tables (located in the formdata and config columns respectively) and coalesing the two objects. In case of duplicate keys, the formdata table takes precedece

From there I create a series of switch and case statements allowing us to render components for the html elements

## What I left out

Currently the only extant forms are ones I have added manually to the forms table. This means forms can be dynamically rendered, but not currently dynamically generated. I wanted to make sure I could have a fully supported api first

If I were to implement a dynamic form generator I would look into using the <Dynamicform /> itself to make the submission form

## Next steps

I would love for the ability to pass custom stylesheets. Currently you can throw a `className` into the `config` in the form table and it would get passed into the <DynamicForm />, but since the components have their own label just putting in classNames affects the entire element

With more time, I would also add more html elements to the table and more forms to demo

I would also want to spend more time on the form control. While we can use the native required field on input elements, I would want to spend more time making sure the submit button cannot send until required fields have been filled out for example.
