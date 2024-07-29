# Sentimental

The goal of this project is to build a demo app to explore ML/AI on the frontend, while keeping healthcare providers and patients in mind.

# Overview

This project uses machine learning and natural language processing for sentiment analysis. It also contains real api calls with mock patient data, routing, a component lib and branded UI.

## Libs and tools 
This project uses the following libs, mainly for lean product dev:

- [`React + Vite`](https://vitejs.dev) for declarative UI and minimal config with HMR and build.
- [`styled-components`](https://styled-components.com) for CSS app and component styling
- [`TanStack Query`](https://tanstack.com/query) for declarative data fetching and caching
- [`Transformers.js`](https://huggingface.co/docs/transformers.js) for sentiment analysis in the browser
- [`React Router Web`](https://v5.reactrouter.com/web/guides/quick-start) for routing
- [`Faker API`](https://fakerapi.it/) for test data

## Learnings

I learned a lot while researching building this project. I learned that machine learning can be done in the browser without using a server and associated costs. This project uses natural language processing for sentiment analysis. I learned new concepts like models, pipelines, text tokenization and zero-shot classification. Since ML models are large and can be more than 1 GB, they can be loaded into the browser using web workers so they don't block the main thread. Initially it takes a minute to load but after the processes are very fast. I learned how to use web workers for this in React and design the UI with this in mind. I had to balance this tech with how a real user might use this.
Normally, sentiment analyis on static text would be done in a service that talks to transformers.js and then send this data to the UI. 
Running sentiment analysic on static journal entry text on the frontend in a list of entries was processor intensive and not performant because a worker is created for each entry. This could be done in a data transform once for the list closer to the api or in a service like explained above. 
I'd like to explore loading another model for text summarization on the patient detail page. This could summarize the text when it's entered by clicking a summarize button. And it could use used to summarize the patient data in aggregate. A design option could be to break the patient page into tabs patient to allow the user to focus on an entry and also possibly improve performance and features are added.


## Notes

- I used Faker API to model some mock patient data using the `/custom` endpoint. It has a `_seed` param that ensures consistent data, but couldn't get it to work with `/custom`. If this was working then the patient clicked on could be the patient viewed on the detail page. Also, this would show the api data caching by TanStack Query. 
- Faker API images are broken for some reason
- Most components were copied from a previous project and modifed for so could focus on this project, but also show component lib and design.
- The layout components `Row` and `Stack` show a scalable and maintainable way to handle layout and styles

## Roadmap

- Add auto summary to patient overview and journal entry
- Make health score dynamic using mocked data calculations
- Show trendline on patient detail
- Add back button on patient detail
- Show patient image on list
- Update to use relevant icons
- Make badges dynamic - negative, red; positive, green
- Patient filtering and search using semantic search
