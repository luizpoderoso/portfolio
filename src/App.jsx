import SpotlightCard from "./components/SpotlightCard";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 bg-[#09090b]">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Introdução */}
        <SpotlightCard>
          <h1 className="text-4xl font-bold text-white mb-2">Luiz Poderoso</h1>
          <p className="text-zinc-400">
            Desenvolvedor Full Stack. Criando interfaces modernas com React e
            Tailwind.
          </p>
        </SpotlightCard>

        {/* Card 2: Exemplo de Projeto */}
        <SpotlightCard>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">
              Projeto Financify
            </h2>
            <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
              2025
            </span>
          </div>
          <p className="text-zinc-400 text-sm mb-4">
            Gestão financeira pessoal com Next.js e Drizzle ORM.
          </p>
          <div className="flex gap-2 text-xs text-zinc-500 font-mono">
            <span>#React</span>
            <span>#TypeScript</span>
            <span>#PostgreSQL</span>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default App;
