#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%s)
BRANCH="$1"

if [ "$#" -ne 1 ]; then
	echo "Please provide an environment (demo, staging, production)"
	exit 1
fi

if [ $BRANCH == "staging" ]; then
	REPO_NAME="web-static-staging"
elif [ $BRANCH == "production" ]; then
	REPO_NAME="web-static-production"
else
	echo "Please provide a valid branch"
	exit 1
fi

./ci/deploy_website.sh $BRANCH $REPO_NAME $DATE & 
./ci/deploy_lambda.sh $BRANCH &

# Ensure fail on Circle-Ci if parallel deployments fail.
for job in `jobs -p`
do
	wait $job || let "FAIL=1"
done

exit $FAIL
