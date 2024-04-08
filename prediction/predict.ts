const inputExample: number[] = [350, 420, 380, 570, 460, 690, 920, 710];

function calculateAverage(allNumbers: number[]): number {
    return allNumbers.reduce((a, b) => a + b, 0) / allNumbers.length;
}

function getTheABValues(first: { x: number, y: number }, second: { x: number, y: number }): { a: number, b: number } {
    const a = Math.abs(first.y - second.y) / Math.abs(first.x - second.x);
    const b = first.y - first.x * a;

    return { a, b };
}

function mayerLinePrediction(scatterPlot: number[], dateToPredict: number) {
    // split en 2 tableaux
    const secondPart = scatterPlot.splice(scatterPlot.length / 2);

    // calculer le X et le Y et chaque tableau
    const firstXY = {
        x: calculateAverage(Array.from({ length: scatterPlot.length }, (_, i) => i + 1)),
        y: calculateAverage(scatterPlot)
    };

    const secondXY = {
        x: calculateAverage(Array.from({ length: secondPart.length }, (_, i) => i + scatterPlot.length + 1)),
        y: calculateAverage(secondPart)
    };

    // resoudre les equations
    const { a, b } = getTheABValues(firstXY, secondXY);

    // donner le resultat pour l'annee voulu
    return a * dateToPredict + b;
}

const nextYear = mayerLinePrediction(inputExample, 9);
console.log(nextYear);
