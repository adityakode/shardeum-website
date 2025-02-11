import React, { useEffect } from "react";
import { Box, Flex, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Head from "next/head";
const Carrers: NextPage = () => {
  const router = useRouter();

  const { t: pageTranslation } = useTranslation(["page-careers"]);
  const { t: commonTranslation } = useTranslation(["common"]);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.type = "application/ld+json";
    // script.text = `{
    //   "@context": "https://schema.org/",
    //   "@type": "BreadcrumbList",
    //   itemListElement: [
    //     {
    //       "@type": "ListItem",
    //       position: 1,
    //       name: "Home",
    //       item: "https://shardeum.org/",
    //     },
    //     {
    //       "@type": "ListItem",
    //       position: 2,
    //       name: "Careers",
    //       item: "https://shardeum.org/careers/",
    //     },
    //   ],
    // };`;
    // document.head.appendChild(script);
  }, []);
  return (
    <>
      {/* <NextSeo
        title={"Shardeum Careers | Help us build Shardeum!"}
        description="Explore and apply for job openings at Shardeum in project management, development, social media, and more. Join us in building the first Web3 network to solve the blockchain trilemma"
        canonical="https://shardeum.org/careers/"
        additionalMetaTags={[
          {
            property: "keywords",
            content: "shardeum,blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/Shardeum.png",
          },
        ]}
        openGraph={{
          title: "Shardeum Careers | Help us build Shardeum!",
          type: "website",
          url: "https://shardeum.org/careers/",

          description:
            "Explore and apply for job openings at Shardeum in project management, development, social media, and more. Join us in building the first Web3 network to solve the blockchain trilemma",
          images: [
            {
              url: "https://shardeum.org/Shardeum.png",
              alt: "Shardeum Image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      /> */}

      <Head>
        <title>{`Shardeum Careers | Help us build Shardeum!`}</title>
        <meta
          name="description"
          content={`Explore and apply for job openings at Shardeum in project management, development, social media, and more. Join us in building the first Web3 network to solve the blockchain trilemma`}
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />

        {/* Facebook */}
        <meta property="og:url" content={`https://shardeum.org/careers/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Shardeum Careers | Help us build Shardeum!`} />
        <meta
          property="og:description"
          content={`Explore and apply for job openings at Shardeum in project management, development, social media, and more. Join us in building the first Web3 network to solve the blockchain trilemma`}
        />
        <meta
          property="og:image"
          content={`https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png`}
        />

        {/* Twiter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://shardeum.org/" />
        <meta property="twitter:url" content={`https://shardeum.org/careers/`} />
        <meta property="twitter:title" content={`Shardeum Careers | Help us build Shardeum!`} />
        <meta
          property="twitter:description"
          content={`Stay up-to-date with the latest news, topics and trends on the world's fastest growing L1 ecosystem`}
        />
        <meta
          property="twitter:image"
          content={`https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png`}
        />

        {/* <meta property="og:site_name" content={`Shardeum | Ecosystem ${project.name}`} /> */}

        {/* <meta name="twitter:title" content={`Shardeum | Ecosystem ${project.name}`} /> */}
        {/* <meta name="twitter:description" content={project.description.substring(0, 160)} /> */}
        {/* <meta
          name="twitter:image"
          content={project.logo || `https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png`}
        /> */}
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Home",
                "item": "https://shardeum.org/"  
              },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Careers",
                "item": "https://shardeum.org/careers/"  
              }]
            }`,
          }}
        />
      </Head>

      {/* Hero section */}
      {!router.query.gh_jid && (
        <Hero
          heading="Help us build Shardeum!"
          description="Explore and apply for job openings at Shardeum in project management, development, social media, and more. Join us in building the first Web3 network to solve the blockchain trilemma"
          breadcrumb={
            <>
              <p>
                <NextLink href="/" passHref>
                  Home
                </NextLink>{" "}
                / Careers
              </p>
            </>
          }
        />
      )}
      <Flex bg="brand.white" as="section">
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "10" }}
          px={{ base: 6, xl: 0 }}
        >
          <div id="grnhse_app"></div>
          <Script src="https://boards.greenhouse.io/embed/job_board/js?for=shardeumfoundation" />
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-careers"])),
      // Will be passed to the page component as props
    },
  };
}

export default Carrers;
