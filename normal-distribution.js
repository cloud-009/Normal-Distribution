function calculateNormalDistributionPDF(value, mean, standardDeviation) {
    const dividend = Math.pow(Math.E, -(Math.pow((value - mean), 2) / (2 * Math.pow(standardDeviation, 2))));
    const divisor = standardDeviation * Math.sqrt(2 * Math.PI);
    return dividend / divisor;
}

function calculateMean(data) {
    return data.reduce((a, b) => a + b, 0) / data.length;
}

function calculateStandardDeviation(data) {
    const n = data.length;
    const mean = this.calculateMean(data);
    return Math.sqrt(data.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}