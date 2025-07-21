module.exports = function(api) {
    api.cache(true);
  
    return {
      presets: [
        ["babel-preset-expo", {
          jsxImportSource: "nativewind"
        }],
        "nativewind/babel"
      ],
      plugins: [
        ["module-resolver", {
          root: ["./"],  // raiz do projeto, pode ajustar conforme sua estrutura
          alias: {
            "@": "./",  // alias para a raiz do projeto
            "tailwind.config": "./tailwind.config.js"
          }
        }]
      ]
    };
  };
  