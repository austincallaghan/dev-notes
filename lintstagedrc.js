module.exports = {
  '*.js': ['prettier --write', 'eslint'],
  '!*.js': 'prettier --write --ignore-unknown --no-error-on-unmatched-pattern',
};
