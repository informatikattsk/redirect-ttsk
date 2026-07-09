import RedirectNotice from "./RedirectNotice";

const targetUrl = "https://trnava-vuc.sk";

export default function Home() {
  return (
    <RedirectNotice
      fallbackUrl={targetUrl}
      script={`window.location.replace(${JSON.stringify(targetUrl)} + window.location.search + window.location.hash);`}
    />
  );
}
