describe('lib', function ()
{

    var operators;
    var context;
    beforeEach(function ()
    {
        operators = {
            equals: equalsOperator
        };
        context = {a: 1, b: 2, c: 1};
    });

    it('should evaluate a equals b to false', function ()
    {
//    Given
        var rules = [
            {operator: 'equals', params: ['a', 'b']}
        ];
        var engine = window.createEngine(context, rules, operators);
//    When
        var result = engine.run();
//    Then
        expect(result).toBe(false);
    });

    it('should evaluate b equals a to false', function ()
    {
//    Given
        var rules = [
            {operator: 'equals', params: ['b', 'a']}
        ];
        var engine = window.createEngine(context, rules, operators);
//    When
        var result = engine.run();
//    Then
        expect(result).toBe(false);
    });

    it('should evaluate b equals c to false', function ()
    {
//    Given
        var rules = [
            {operator: 'equals', params: ['b', 'c']}
        ];
        var engine = window.createEngine(context, rules, operators);
//    When
        var result = engine.run();
//    Then
        expect(result).toBe(false);
    });

    it('should evaluate a equals a && b equals a && c equals a && a equals c to true', function ()
    {
//    Given

        var rules = [
            {operator: 'equals', params: ['a', 'a']},
            {operator: 'equals', params: ['b', 'b']},
            {operator: 'equals', params: ['c', 'a']},
            {operator: 'equals', params: ['a', 'c']}
        ];

        var engine = window.createEngine(context, rules, operators);
//    When
        var result = engine.run();
//    Then
        expect(result).toBe(true);
    });
});
