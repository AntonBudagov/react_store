// принимает массив функций ...func
// reduceRight проходим с права на лево. вызываем какждую функцию и
// передавая каждой функции результат предыдущей функции и затем вернуть результат

// example compose(a,b,c)(value) same a(b(c(value)))

const compose = (...func) => (comp) => {
  // wrapped  - prev result
  return func.reduceRight((wrapped, f) => f(wrapped), comp);
};

export default compose;