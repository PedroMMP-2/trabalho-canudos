import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/canudos-hero.jpg";
import conselheiroImg from "@/assets/conselheiro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Revolta de Canudos (1896-1897) — Trabalho de História" },
      {
        name: "description",
        content:
          "Trabalho escolar sobre a Guerra de Canudos: contexto, Antônio Conselheiro, as quatro expedições militares e o legado da resistência sertaneja no interior da Bahia.",
      },
      { property: "og:title", content: "A Revolta de Canudos (1896-1897)" },
      {
        property: "og:description",
        content: "Contexto, causas, expedições e legado da Guerra de Canudos.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      {/* HERO */}
      <header className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Ilustração do arraial de Canudos no sertão baiano"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-20">
          <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-background/80">
            Trabalho de História · Brasil República
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-background sm:text-7xl md:text-8xl">
            A Revolta
            <br />
            <em className="font-normal italic text-accent">de Canudos</em>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl leading-relaxed text-background/90 sm:text-2xl">
            Sertão da Bahia, 1896–1897. A história de um arraial que desafiou a
            República e foi destruído em uma das guerras mais sangrentas do Brasil.
          </p>
          <div className="mt-10 flex items-center gap-3 text-background/70">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-xs uppercase tracking-widest">
              Role para começar
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* INTRODUÇÃO */}
        <Section number="01" title="O que foi a Revolta de Canudos?">
          <p>
            A <strong>Guerra de Canudos</strong> foi um conflito armado ocorrido entre
            1896 e 1897 no sertão da Bahia, no povoado de Canudos. De um lado, os
            sertanejos liderados pelo beato <strong>Antônio Conselheiro</strong>; do
            outro, o Exército da recém-proclamada República brasileira.
          </p>
          <p>
            O arraial chegou a abrigar mais de <strong>25 mil pessoas</strong>,
            tornando-se a segunda maior cidade da Bahia na época. Foi destruído após
            quatro expedições militares, deixando milhares de mortos.
          </p>
        </Section>

        {/* CONTEXTO */}
        <Section number="02" title="Contexto histórico">
          <p>
            No final do século XIX, o Nordeste brasileiro vivia uma realidade dura:
            seca, fome, miséria, concentração de terras nas mãos de poucos coronéis e
            o abandono pelo poder público. A recém-proclamada República (1889) não
            trouxe melhorias para o sertanejo pobre.
          </p>
          <ul className="space-y-3 border-l-2 border-accent pl-6">
            <li><strong>Seca e miséria</strong> no sertão nordestino</li>
            <li><strong>Fim da escravidão (1888)</strong> sem políticas de inclusão</li>
            <li><strong>Cobrança de impostos</strong> pela nova República</li>
            <li><strong>Separação entre Igreja e Estado</strong>, vista como ofensa</li>
            <li><strong>Coronelismo</strong> e violência no campo</li>
          </ul>
        </Section>

        {/* ANTÔNIO CONSELHEIRO */}
        <Section number="03" title="Antônio Conselheiro">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-start">
            <figure className="overflow-hidden rounded-sm shadow-elegant">
              <img
                src={conselheiroImg}
                alt="Retrato de Antônio Conselheiro"
                width={768}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="bg-secondary px-4 py-3 font-body text-xs uppercase tracking-wider text-secondary-foreground">
                Antônio Vicente Mendes Maciel · 1830–1897
              </figcaption>
            </figure>
            <div className="space-y-4">
              <p>
                Nascido no Ceará, <strong>Antônio Vicente Mendes Maciel</strong>{" "}
                tornou-se peregrino pelo sertão pregando a fé católica, criticando a
                República e prometendo justiça aos pobres. Era visto como santo pelos
                sertanejos e como fanático perigoso pelas elites.
              </p>
              <p>
                Em 1893, fundou o arraial de <strong>Belo Monte</strong>, conhecido
                como Canudos, em uma fazenda abandonada. Lá, organizou uma comunidade
                baseada na fé, no trabalho coletivo e na vida simples.
              </p>
              <blockquote className="border-l-4 border-accent bg-secondary/50 p-5 font-display text-xl italic text-secondary-foreground">
                "A República não pode prevalecer, porque está em desacordo com as leis
                de Deus."
              </blockquote>
            </div>
          </div>
        </Section>

        {/* EXPEDIÇÕES */}
        <Section number="04" title="As quatro expedições">
          <p className="mb-8">
            O governo enviou <strong>quatro expedições militares</strong> para destruir
            Canudos. As três primeiras foram derrotadas pelos sertanejos.
          </p>
          <div className="space-y-6">
            <Expedition
              n="1ª"
              date="Novembro de 1896"
              text="100 soldados sob o tenente Pires Ferreira. Derrotados em Uauá."
            />
            <Expedition
              n="2ª"
              date="Janeiro de 1897"
              text="560 homens liderados pelo major Febrônio de Brito. Vencidos no Cambaio."
            />
            <Expedition
              n="3ª"
              date="Março de 1897"
              text="1.300 soldados sob o coronel Moreira César, herói da República. Morto em combate; tropa em fuga."
            />
            <Expedition
              n="4ª"
              date="Junho a Outubro de 1897"
              text="Mais de 8.000 soldados, com artilharia pesada. Após meses de cerco, Canudos foi totalmente destruída em 5 de outubro de 1897."
              destructive
            />
          </div>
        </Section>

        {/* DESFECHO */}
        <Section number="05" title="O fim do arraial">
          <p>
            Em <strong>5 de outubro de 1897</strong>, os últimos quatro defensores —
            "um velho, dois homens feitos e uma criança" — foram mortos. Canudos foi
            queimada, suas casas demolidas e a cabeça de Antônio Conselheiro
            decepada e exibida publicamente.
          </p>
          <p>
            Estima-se que entre <strong>15 mil e 25 mil sertanejos</strong> morreram.
            Mulheres e crianças sobreviventes foram levados como prisioneiros; muitos
            desapareceram no caminho.
          </p>
        </Section>

        {/* LEGADO */}
        <Section number="06" title="Legado e Os Sertões">
          <p>
            O jornalista <strong>Euclides da Cunha</strong> acompanhou a quarta
            expedição como correspondente. Suas observações resultaram no livro{" "}
            <em>Os Sertões</em> (1902), obra-prima da literatura brasileira que
            denunciou a violência do Estado e revelou ao Brasil a realidade do
            sertanejo.
          </p>
          <blockquote className="my-6 border-l-4 border-accent bg-secondary/50 p-6 font-display text-2xl italic leading-snug text-secondary-foreground">
            "O sertanejo é, antes de tudo, um forte."
            <footer className="mt-2 font-body text-sm not-italic text-muted-foreground">
              — Euclides da Cunha, Os Sertões
            </footer>
          </blockquote>
          <p>
            Canudos tornou-se símbolo da <strong>resistência popular</strong>, da
            desigualdade social brasileira e do conflito entre o Brasil litorâneo,
            urbano e moderno, e o Brasil sertanejo, esquecido e empobrecido.
          </p>
        </Section>

        {/* TIMELINE */}
        <Section number="07" title="Linha do tempo">
          <ol className="space-y-4">
            {[
              ["1893", "Antônio Conselheiro funda o arraial de Belo Monte (Canudos)."],
              ["1896", "Conflito com autoridades de Juazeiro inicia a guerra."],
              ["Nov 1896", "1ª Expedição é derrotada em Uauá."],
              ["Jan 1897", "2ª Expedição vencida no Cambaio."],
              ["Mar 1897", "3ª Expedição: morre o coronel Moreira César."],
              ["Jun–Out 1897", "4ª Expedição cerca e destrói Canudos."],
              ["5 Out 1897", "Queda final do arraial."],
              ["1902", "Publicação de Os Sertões, de Euclides da Cunha."],
            ].map(([date, event]) => (
              <li key={date} className="flex gap-6 border-b border-border pb-4">
                <span className="w-32 shrink-0 font-display text-lg font-semibold text-primary">
                  {date}
                </span>
                <span className="text-foreground/90">{event}</span>
              </li>
            ))}
          </ol>
        </Section>
      </main>

      <footer className="border-t border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-4xl px-6 text-center font-body text-sm text-muted-foreground">
          <p>Trabalho escolar de História — A Revolta de Canudos (1896–1897)</p>
          <p className="mt-2 text-xs">
            Fontes: <em>Os Sertões</em>, de Euclides da Cunha · Memorial de Canudos · UFBA
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20 scroll-mt-20">
      <div className="mb-6 flex items-baseline gap-4">
        <span className="font-display text-sm font-medium tracking-widest text-accent">
          {number}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <h2 className="mb-8 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
        {children}
      </div>
    </section>
  );
}

function Expedition({
  n,
  date,
  text,
  destructive = false,
}: {
  n: string;
  date: string;
  text: string;
  destructive?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border p-6 shadow-soft transition-colors ${
        destructive
          ? "border-destructive/40 bg-destructive/5"
          : "border-border bg-card"
      }`}
    >
      <div className="mb-2 flex items-baseline gap-4">
        <span className="font-display text-3xl font-semibold text-primary">{n}</span>
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
          {date}
        </span>
      </div>
      <p className="text-foreground/85">{text}</p>
    </div>
  );
}
