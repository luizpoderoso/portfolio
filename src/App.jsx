import { MapPin } from "lucide-react";
import SpotlightCard from "./components/SpotlightCard";
import { Github, Linkedin, Code2, Instagram } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen w-full p-2 md:p-8 overflow-hidden">
      {/* Fundo com textura */}
      <div className="bg-noise"></div>

      <main className="max-w-5xl mx-auto pb-24">
        {/* Título Principal */}
        <header className="mb-12 mt-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Luiz Poderoso<span className="text-red-500">.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Full Stack Developer. Transformando café em código limpo e escalável
            com Rust e React.
          </p>
        </header>
        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Card 1: Stack Principal */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between group px-4 md:px-8 py-5 md:py-10">
            <div
              className="absolute top-0 left-0 inset-0 z-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div>
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <Code2 size={20} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Full Stack
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white leading-tight">
                Construindo aplicações modernas com performance.
              </h3>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5">
                <i class="devicon-react-original colored scale-150"></i>
              </div>
              <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5">
                <i class="devicon-rust-original scale-150"></i>
              </div>
              <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5">
                <i class="devicon-typescript-plain colored scale-150"></i>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Redes Sociais */}
          <SpotlightCard className="md:row-span-2 px-4 py-5 md:px-8 md:py-10">
            <div className="flex md:flex-col gap-4 h-full [&>a]:w-full">
              <a
                href="https://github.com/luizpoderoso"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition group py-1"
              >
                <Github
                  size={32}
                  className="text-zinc-400 group-hover:text-white transition"
                />
                <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/luiz-poderoso/"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 bg-white/5 rounded-xl border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition group py-1"
              >
                <Linkedin
                  size={32}
                  className="text-zinc-400 group-hover:text-blue-400 transition"
                />
                <span className="text-xs font-mono text-zinc-500 group-hover:text-blue-300">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://www.instagram.com/_luizpoderoso_/"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 bg-white/5 rounded-xl border border-white/5 hover:bg-purple-500/10 hover:border-purple-500/30 transition group py-1"
              >
                <Instagram
                  size={32}
                  className="text-zinc-400 group-hover:text-purple-400 transition"
                />
                <span className="text-xs font-mono text-zinc-500 group-hover:text-purple-300">
                  Instagram
                </span>
              </a>
            </div>
          </SpotlightCard>

          {/* Card 3: Jogo */}
          <SpotlightCard className="relative overflow-hidden group h-full min-h-[180px]">
            {/* Imagem de Fundo */}
            <div
              className="min-h-[180px] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              // style={{
              //   backgroundImage:
              //     'url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0c67438c8b3a418b5ca28f9f234506745493ae42-854x484.png?accountingTag=VAL?auto=format&fit=crop&q=80&h=484&w=854&crop=center")',
              // }}
              style={{
                backgroundImage: 'url("valorant.webp")',
              }}
            ></div>

            {/* Overlay Escuro */}
            <div className="min-h-[180px] absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Conteúdo sobreposto */}
            <div className="relative z-10 h-full flex flex-col justify-end p-4">
              <div className="flex items-center gap-2 mb-1">
                {/* Abaixo está comentado a animação de pulso (JOGANDO AGORA) */}
                {/* <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>*/}
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-[10px] font-bold uppercase text-red-400 tracking-wider">
                  Último jogo
                </span>
              </div>
              <span className="font-bold text-white text-lg leading-tight">
                Valorant
              </span>
            </div>
          </SpotlightCard>

          {/* Card 4: Localização + Status */}
          <SpotlightCard className="flex items-center min-h-[180px]">
            <div className="w-full h-full flex flex-col justify-center px-6 lg:px-10">
              <div className="flex flex-col justify-start gap-2">
                <div className="flex text-zinc-400 gap-2">
                  <MapPin size={18} />
                  <span className="text-xs font-mono uppercase">
                    Localização
                  </span>
                </div>
                <span className="w-fit text-xl font-bold text-white">
                  Aracaju, BR
                </span>
                <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Disponível para projetos
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 5: Projeto Destaque */}
          <SpotlightCard className="md:col-span-2 bg-zinc-900">
            <div className="w-full h-full flex flex-row">
              {/* Info do Projeto */}
              <div className="flex flex-col justify-center p-3 lg:p-6 w-1/2 z-10">
                <div className="flex flex-col lg:flex-row lg:gap-x-8 items-start mb-2">
                  <h3 className="sm:text-lg lg:text-xl font-bold text-white">
                    Financify
                  </h3>
                  <div className="px-1 md:px-2 py-1 w-fit rounded-md bg-white/10 text-xs border border-white/10">
                    Next.js 15
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-zinc-400 mb-2 sm:mb-3">
                  Gestão financeira pessoal com dashboards inteligentes.
                </p>
                <a
                  href="https://github.com/luizpoderoso/financify"
                  target="_blank"
                  className="w-fit lg:mt-4 text-xs text-white bg-white/10 p-1 sm:px-4 sm:py-2 rounded-lg hover:bg-white/20 transition"
                >
                  Acessar repositório
                </a>
              </div>
              {/* Imagem Preview */}
              <div className="w-1/2 h-full relative">
                <img
                  src="financify-preview.webp"
                  alt="Financify Dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-top-left opacity-80 hover:opacity-100 transition-opacity border-l border-white/5"
                />
                <div className="absolute inset-0 bg-linear-to-r from-zinc-900/50 to-transparent"></div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 6: Footer Integrado */}
          <SpotlightCard className="md:col-span-2 flex items-center justify-between px-8 py-10">
            <div className="h-full flex flex-col justify-between">
              <div className="text-xs text-zinc-500">
                © 2025 Luiz Poderoso. <br />
                Feito com React & Tailwind.
              </div>
              <a
                href="mailto:lpoderoso@icloud.com"
                className="w-fit text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
              >
                Enviar Email
              </a>
            </div>
          </SpotlightCard>
        </div>
      </main>
    </div>
  );
}

export default App;
