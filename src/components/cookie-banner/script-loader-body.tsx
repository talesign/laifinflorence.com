import { useConsent } from "./hooks";

export default function ScriptLoaderBody() {
  const { consentState, isLoading, isError, error } = useConsent();

  if (isLoading) {
    return null;
  }

  if (isError) {
    console.log(error);
    return null;
  }

  return (
    <>
      {consentState?.consent.nece && <></>}
      {consentState?.consent.anon && <></>}
      {consentState?.consent.anal && <></>}
      {consentState?.consent.expe && <></>}
      {consentState?.consent.mark && <></>}
    </>
  );
}
