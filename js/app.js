function peformance() {
  const startingTime = performance.now();
  const endingTime = performance.now();
  console.log(
    'This code took ' + (endingTime - startingTime) + ' milliseconds.'
  );
}
peformance();
