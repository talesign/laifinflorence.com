export default function GTag() {
  console.log("component mounted...");
  return (
    <>
      <script
        async
        type="text/partytown"
        src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_GANALYTICS_ID}`}
      />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
window.gtag = function gtag(){dataLayer.push(arguments)};
gtag('js', new Date()); 
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});
console.log("Setup finished");
gtag('config', '${import.meta.env.PUBLIC_GANALYTICS_ID}');
        `,
        }}
      ></script>
    </>
  );
}
