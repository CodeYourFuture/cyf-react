# Code Yor Future
---

[![CircleCI](https://circleci.com/gh/CodeYourFuture/cyf-react.svg?style=svg)](https://circleci.com/gh/CodeYourFuture/cyf-react)

__NOTE__: Currently reactifying the old repo, instructions not up to date


## Requirements

- node

## Setup

```bash
$ yarn start # start development env
$ yarn build # to build index to ./public
```

## Present

To present merge your changes to `demo` branch. CI will build and then deploy it to GitHub pages (check web-static-[demo,staging,production] repos):

Currently, there is only one release candidate branch `staging` accessible on:
- [staging.codeyourfuture.co](http://staging.codeyourfuture.co)

## Contribute

Development workflow is tracked on [CYF Web](https://trello.com/b/wLDcxrly/cyf-web) Trello board. There are lists with tasks and their states, e.g. `Todo`, `In Progress`, `In Review` and `Done`

If you found an error, got idea for improvement, or new feature you can submit a new ticket to `Ideas`.

To get access to Trello `admin[at]codeyourfuture.co`, or let us know on Slack and we will add you to the project.

To contribute please follow instructions:

1. select a task from `Todo` list, assign your name and move the task to `In Progress` list.
- create a new branch and apply your changes
- (optional) to discuss your changes, you can merge your branch to `demo` branch and see your changes [demo environment](demo-codeyourfuture.s3-website-us-west-2.amazonaws.com)
- when you are finished, merge your branch to `staging` branch
- Then, submit a PR from `staging` to `master` for review and move the task to `In Review` list (currently, we have only one review environment, so if you see another PR make sure its safe to merge to `staging`)
- the code is approved by adding _LGTM_ to comment
- after the PR is approved the reviewer, or contributor merges PR
- when the PR is merged to master, automatic build on CircleCI deploys the website
- briefly look on the web to see your changes are fine; [http://codeyourfuture.co/](http://codeyourfuture.co/)
- move task fro in `Review` to `Done`

Thank you.

Minor change to the README to test.
