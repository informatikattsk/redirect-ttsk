import RedirectNotice from "./RedirectNotice";

const targetUrl = "https://trnava-vuc.sk";

export default function NotFound() {
  return (
    <RedirectNotice
      fallbackUrl={targetUrl}
      script={`
            const destination = new URL(${JSON.stringify(targetUrl)});
            destination.pathname = window.location.pathname;
            destination.search = window.location.search;
            destination.hash = window.location.hash;
            window.location.replace(destination.toString());
          `}
    />
  );
}
