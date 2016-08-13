describe('calculator', function () {
			
			describe('sum', function () {
				it('1 + 1 should equal 2', function () {
					expect(calculator.sum(1, 1)).toBe(2);
				});	
			});

			describe('subtract', function () {
				it('3 - 2 should equal 1', function () {
					expect(calculator.subtract(3, 2)).toBe(1);
				});
			});

			describe('divide', function () {
				it('10 / 5 should equal 2', function () {
					expect(calculator.divide(10, 5)).toBe(2);
				});

				it('zero divisor should equal 0', function () {
					expect(calculator.divide(10, 0)).toBe(0);
				});
			});
		});
