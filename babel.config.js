module.exports = {
  //presets: ['@babel/preset-env', '@babel/preset-react'], // old way works too
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // not having to import react whenever using jsx in a file
  ],
}
