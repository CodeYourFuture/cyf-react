#!/bin/bash

BRANCH="$1"

# Changes variables in code depending on environment.
if [ $BRANCH == "production" ]; then
    sed -i -e "s#__REACT_APP_STRIPE_PUBLIC_KEY__#pk_live_wvm6YFWTG1FrYAGVuzCLIPx8#g" .env
	sed -i -e "s#__REACT_APP_DONATION_ENDPOINT__#https://ivc9bvmb2d.execute-api.eu-west-1.amazonaws.com/production/donate#g" .env
	sed -i -e "s#__REACT_APP_PIPEDRIVE_ENDPOINT__#https://ivc9bvmb2d.execute-api.eu-west-1.amazonaws.com/production/database#g" .env
	export ENVIRONMENT=production
	cd lambda && yarn && yarn deploy-production
else
	sed -i -e "s#__REACT_APP_STRIPE_PUBLIC_KEY__#pk_test_noH4KPBQ7w5U3wZaRVo6NbmS#g" .env
	sed -i -e "s#__REACT_APP_DONATION_ENDPOINT__#https://fsdynf2mse.execute-api.eu-west-1.amazonaws.com/staging/donate#g" .env
	sed -i -e "s#__REACT_APP_PIPEDRIVE_ENDPOINT__#https://fsdynf2mse.execute-api.eu-west-1.amazonaws.com/staging/database#g" .env
	export ENVIRONMENT=staging
	cd lambda && yarn && yarn deploy-staging && cd events && yarn && yarn deploy-staging
fi
