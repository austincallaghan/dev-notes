const policies = require('./csp.json');
const gtmVersaPolicies = require('./csp_gtm_versa.json');

const generateContentSecurityPolicy = (policies) => {
  return Object.entries(policies).reduce((policyString, [policyName, policyValue]) => {
    let policy = policyValue;
    if (gtmVersaPolicies[policyName]) {
      const gtmVersaPolicy = gtmVersaPolicies[policyName].join(' ');
      policy = `${policy} ${gtmVersaPolicy}`;
    }
    return `${policyString}${policyName} ${policy}; `;
  }, '');
};

const generatedPolicyString = generateContentSecurityPolicy(policies);

console.log(generatedPolicyString);
