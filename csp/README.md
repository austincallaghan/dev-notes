# Generate Content Security Policy for API headers

## Usage

1. Go to csp directory:

```sh
$ cd csp
```

2. Make sure the shellscript have execution permission:

```sh
$ chmod +x ./*sh
```

3. Set the HEROKU_APP_NAME variable:

```sh
$ export HEROKU_APP_NAME=svelte-template-[environment]
```

4. Execute the dry run for testing:

```sh
$ ./push-dry-run.sh
```

5. If everything is working with the dry run, execute the push-csp script:

```sh
$ ./push-csp.sh
```

## csp.json

Policies definition

## generate-policy-string.cjs

Generates string to be used as heroku config variable

## push-dry-run.sh

Set variable for CSP Report Only

## push-csp.sh

Set variable for real CSP

## Variables needed

```sh
HEROKU_APP_NAME=svelte-template-dev
```
