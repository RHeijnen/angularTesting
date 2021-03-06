
		
		var calculator = {
			sum: function (x, y) {
				return x + y;
			},
			subtract: function (x, y) {
				return x - y;
			},
			divide: function (x, y) {
				return x / y;
			},
			multiply: function (x, y) {
				return x * y;
			}
		}

		
		describe('calculator', function () {
			
			describe('sum', function () {
				it('1 + 1 should equal 2', function () {
					expect(calculator.sum(1, 1)).toBe(2);
				});	
			});

			describe('subtract', function () {
				it('1 - 1 should equal 0', function () {
					expect(calculator.subtract(1, 1)).toBe(0);
				});
			});

			describe('divide', function () {
				it('10 / 2 should equal 5', function () {
					expect(calculator.divide(10, 2)).toBe(5);
				});
			});
			
			describe('multiply', function () {
				it('10 * 10 should equal 100', function () {
					expect(calculator.multiply(10, 10)).toBe(100);
				});
			});
			
			
		});
