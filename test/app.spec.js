describe('calcTri teszt', () => {

    it('Input 30, 35', () => {
        let actual = calcTriangleArea(30, 35);
        expect(actual).toBe(525);

    });

    it('Input 40, 45', () => {
        let actual = calcTriangleArea(40, 45);
        expect(actual).toBe(900);

    });

    it('0 értéknél való kivétel', () => {
        expect(() => calcTriangleArea(0, 30)).toThrow();
        
    });

    it('0 értéknél való kivétel, megadott szöveggel', () => {
        expect(() => calcTriangleArea(0, 30)).toThrow(new Error("Hiba! A paraméter nem megfelelő"));

    });

});

describe('checkInput Tests', () => {
    it('Input szám', () => {
        let actual = checkInput('3');
        expect(actual).toBe(true);

    });
    
    it('null számnál false', () => {
        let actual = checkInput('aa');
        expect(actual).toBe(false);

    });

});