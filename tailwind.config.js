tailwind.config = {
    theme: {
      extend:{
        gridTemplateColumns:{
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        
        fontFamily:{
          outfit:["Outfit", "sans-serif"],
          Ovo:["Ovo", "serif"]
        },
        animation:{
              spin_slow:'spin 7s linear infinite'
        },
        colors:{
          lightHover: '#fcf4ff',
          darkHover: '#2a004a',
          darkTheme:'#11001f'
        },
        boxShadow:{
          'black':'4px 4px 0 #000',
          'white':'4px 4px 0 #fff'
        }
  }
},
   darkMode :'selector'
}