#!/bin/bash

BRANCH="$1"

# Changes variables in code depending on environment.

export AUTH0_ADMIN_CLIENT_SECRET=${AUTH0_ADMIN_CLIENT_SECRET}

if [ $BRANCH == "production" ]; then
	export ENVIRONMENT=production
	cd lambda
  yarn --frozen-lockfile
  yarn deploy-production

  cd events
  yarn --frozen-lockfile
  yarn deploy
else
	export ENVIRONMENT=staging

  cd lambda
  yarn --frozen-lockfile
  yarn deploy-staging

  cd events
  yarn --frozen-lockfile
  yarn deploy
fi
