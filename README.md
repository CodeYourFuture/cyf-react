# Code Your Future
---

[![CircleCI](https://circleci.com/gh/CodeYourFuture/cyf-react.svg?style=svg)](https://circleci.com/gh/CodeYourFuture/cyf-react)

This is the official CYF website live at [codeyourfuture.io](https://codeyourfuture.io)

## Requirements

- node

## Setup

```bash
$ yarn # install project dependencies
$ yarn start # start application on localhost:3000
```

## Present

To present merge your changes to `staging` branch. CI will build and then deploy it to GitHub pages (check web-static-[staging,production] repos):

Currently, there is only one release candidate branch `staging` accessible on:
- [staging.codeyourfuture.io](http://staging.codeyourfuture.io)

## Contribute

Development workflow is tracked on [CYF Github Project](https://github.com/CodeYourFuture/cyf-react/projects/1)

Github issues for errors or improvements are welcomed.

To contribute please follow instructions:

- select a task from `Todo` list, assign your name and move the task to `In Progress` list.
- checkout `staging` and pull the latest changes
- create a new branch from `staging`, named after your task
- when you're finished, submit a PR to the `staging` branch for review and move the task to `In Review` list (currently, we have only one review environment, so if you see another PR make sure its safe to merge to `staging`)
- the code is approved by adding _LGTM_ to comment
- after the PR is approved the reviewer, or contributor merges PR
- after merging and a successful deploy, get someone to review the page in the (staging environment)[staging.codeyourfuture.io], to make sure that everything works
- Then, submit a PR from `staging` to `master`
- when the PR is merged to master, automatic build on CircleCI deploys the website
- briefly look on the web to see your changes are fine; [http://codeyourfuture.io/](http://codeyourfuture.io/)
- move task fro in `Review` to `Done`

Thank you.

## Backend features using AWS Lambda

Please read [this](./docs/lambdas.md).
