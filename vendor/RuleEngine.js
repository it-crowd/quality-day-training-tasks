function RuleEngine(rule, operators)
{
    'use strict';

    return {
        run: function ()
        {
            return  operators[rule.operator].apply(null, rule.params)
        }
    }
}
