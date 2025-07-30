'use client'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/235a0e_3d102b9fcb2f49a1aee561e9128825b6~mv2.jpeg/v1/fill/w_1200,h_814,al_c,q_85,enc_avif,quality_auto/nosotros.jpeg')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Quiénes Somos
            </h2>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl">
              {/* Arclad Logo */}
              <div className="mb-8 flex justify-center">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img 
                    src="https://static.wixstatic.com/media/235a0e_f7638eb88c6f478cbb26eb1d0e90188e~mv2.png/v1/fill/w_1140,h_298,fp_0.50_0.68,lg_1,q_85,enc_avif,quality_auto/Logotipo-ARclad-nov24-2016.png"
                    alt="Arclad Logo - Marca oficial"
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>
                  En <span className="font-bold text-purple-600">VINILOS ACHAGA</span>, nos enorgullecemos de contar con más de 
                  <span className="font-semibold"> 20 años de experiencia</span> en el mercado colombiano ofreciendo papel adhesivo 
                  de alta calidad de la reconocida marca <span className="font-semibold">Arclad</span>. Desde nuestros inicios, 
                  nos hemos dedicado a satisfacer las necesidades de nuestros clientes, especializándonos en la distribución de 
                  papel blanco y transparente para impresión digital.
                </p>
                
                <p>
                  Nuestro <span className="font-semibold text-purple-600">compromiso con la calidad y la innovación</span> nos ha 
                  permitido establecernos como un referente en el sector. Trabajamos de la mano con nuestros clientes para 
                  proporcionarles productos que superen sus expectativas y contribuyan al éxito de sus proyectos.
                </p>
                
                <p>
                  En <span className="font-bold text-purple-600">VINILOS ACHAGA</span>, creemos en construir 
                  <span className="font-semibold"> relaciones sólidas y duraderas</span>, basadas en la confianza y el 
                  servicio excepcional.
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-purple-600 text-white px-6 py-3 rounded-full">
                  <span className="font-semibold text-lg">+20 años de experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
