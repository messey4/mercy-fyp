import Head from "next/head";

export default function Meta({
  titlePrefix,
  titleSuffix = "Mercy's FYP",
  description = "Mercy Okwoli final year project",
}) {
  return (
    <Head>
      <title>{`${
        titlePrefix ? titlePrefix + " |" : ""
      }  ${titleSuffix}`}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#79C142" />
    </Head>
  );
}
