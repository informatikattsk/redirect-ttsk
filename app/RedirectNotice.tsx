const targetLabel = "trnava-vuc.sk";

type RedirectNoticeProps = {
  script: string;
  fallbackUrl: string;
};

export default function RedirectNotice({ script, fallbackUrl }: RedirectNoticeProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-6 py-12 text-[#16324f]">
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${fallbackUrl}`} />
      </noscript>

      <section className="w-full max-w-xl rounded border border-[#d8e1eb] bg-white px-8 py-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0068a9] text-lg font-semibold text-white">
          TTSK
        </div>
        <h1 className="text-2xl font-semibold tracking-normal">
          Presmerovávame vás
        </h1>
        <p className="mt-3 text-base text-[#4b6075]">
          Pokračujete na oficiálnu stránku Trnavského samosprávneho kraja.
        </p>
        <a
          className="mt-6 inline-flex items-center justify-center rounded bg-[#0068a9] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#00568c]"
          href={fallbackUrl}
        >
          Pokračovať na {targetLabel}
        </a>
      </section>
    </main>
  );
}
