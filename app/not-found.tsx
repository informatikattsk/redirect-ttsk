const targetUrl = "https://trnava-vuc.sk";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 text-center">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const destination = new URL(${JSON.stringify(targetUrl)});
            destination.pathname = window.location.pathname;
            destination.search = window.location.search;
            destination.hash = window.location.hash;
            window.location.replace(destination.toString());
          `,
        }}
      />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${targetUrl}`} />
      </noscript>
      <a className="underline" href={targetUrl}>
        Pokračovať na trnava-vuc.sk
      </a>
    </main>
  );
}
