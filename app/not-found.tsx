import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        Página não encontrada / Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        O conteúdo que procuras não existe ou foi movido. / The content you are looking
        for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
      >
        Voltar ao início / Back home
      </Link>
    </div>
  );
}
