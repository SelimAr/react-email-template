import {
  Html,
  Tailwind,
  Preview,
  Container,
  Img,
  Text,
  Head,
  Font,
  Button,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  const cancelInvit =
    "*L'organisation se réserve le droit de ne pas rembourser un ticket standard ou V.I.P si celui-ci n'a pas été annulé à moins de 2 jours avant l'ouverture de l'évenement.";
  const vipTicket =
    "*Le Ticket V.I.P est disponible au prix de 200€ et n'est valable que durant la période de conférence de l'organisation, il permet d'avoir un accès total au conférences réservés normalement aux entreprises.";
  const confirmationText =
    "Nous vous confirmons votre invitation à notre webinaire 2024, vous y trouverez certaines des startup présenté en amon avec leurs plus belles innovations, des grandes entreprises et également de grands nom de la tech tel qu'Elon Musk ou Vitalik Buterin.";
  return (
    <Tailwind config={{ theme: {} }}>
      <Html>
        <Head>
          <Preview>Confirmation d'invitation webinaire 2024.</Preview>
          <Font
            fontFamily="system-ui"
            fallbackFontFamily="Verdana"
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Container className="p-3 bg-gray-50">
          <Img
            src="/static/logo.png"
            alt="logo"
            className="max-w-44 max-h-44 mx-auto my-7"
          />
          <Text className="text-4xl font-semibold max-[430px]:text-3xl">
            Bonne nouvelle Selim,
          </Text>
          <Text className="text-xl leading-6 max-[430px]:text-md max-[430px]:leading-5">
            {confirmationText}
          </Text>
          <Container className="relative">
            <Img
              src="/static/banner.png"
              alt="banner"
              className="w-full max-h-72 min-h-56 bg-cover object-cover rounded-md"
            />
            <Container className="absolute z-20 -translate-y-[18em] right-5 block w-fit text-right max-[430px]:-translate-y-[12em]">
              <Text className="text-xl text-white italic">
                «The most anticipated tech webinar of the year.»
              </Text>
              <Text className="text-md text-white italic">Elon Musk</Text>
            </Container>
          </Container>
          <Container className="my-5">
            <Button className="bg-sky-600 text-white text-center text-md font-semibold py-3 w-full rounded-md cursor-pointer">
              Plannifier une entrevue
            </Button>
          </Container>
          <Hr />
          <div className="my-5 flex justify-between w-full items-center flex-nowrap max-[430px]:flex-wrap">
            <Button className="bg-cyan-600 text-white text-center text-md font-semibold py-3 mr-2 w-full rounded-md cursor-pointer max-[430px]:mr-0 max-[430px]:mb-2">
              Ticket V.I.P
            </Button>
            <Button className="bg-cyan-600 text-white text-center text-md font-semibold py-3 ml-2 w-full rounded-md cursor-pointer max-[430px]:ml-0">
              Annuler mon invitation
            </Button>
          </div>
          <Container>
            <Text className="text-gray-400 text-sm italic leading-4">
              {vipTicket}
            </Text>
            <Text className="text-gray-400 text-sm italic leading-4">
              {cancelInvit}
            </Text>
          </Container>
          <Container className="flex justify-center items-center">
            <Link href="#" className="underline text-sm">
              S'abonner à la newsletter
            </Link>
            <Link href="#" className="underline text-sm mx-5">
              Se désinscrire du programme
            </Link>
            <Link href="#" className="underline text-sm">
              Contacter un manager
            </Link>
          </Container>
        </Container>
      </Html>
    </Tailwind>
  );
}
