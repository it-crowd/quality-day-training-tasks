(function ()
{
    'use strict';

    window.createEngine = function (context, rules, operators)
    {

        var engines = [];

        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            engines.push(new RuleEngine(rule, operators))
        }

        for (var key in operators) {
            if (operators.hasOwnProperty(key)) {
                operators[key] = operators[key].bind(null, context);
            }
        }

        return {
            run: function ()
            {
                for (var i = 0; i < engines.length; i++) {
                    if (!engines[i].run()) {
                        return false;
                    }
                }
                return true;
            }
        }
    }
})();
