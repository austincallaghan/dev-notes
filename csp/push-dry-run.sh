#!/bin/bash
policy=$(node ./generate-policy-string.cjs)

heroku config:unset HEADER_CONTENT_SECURITY_POLICY -a $HEROKU_APP_NAME

heroku config:set HEADER_CONTENT_SECURITY_POLICY_DRY_RUN="$policy" -a $HEROKU_APP_NAME
