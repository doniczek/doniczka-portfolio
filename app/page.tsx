'use client'
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip } from "@nextui-org/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
export default function Home() {
  const [currentTime, setCurrentTime] = React.useState<string>(getCurrentTime());


  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);


  function getCurrentTime() {
    if (typeof window === 'undefined') {
      return '';
    }

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (

    <NextUIProvider>
      <div className="min-h-screen flex items-center justify-center dark">
        <Card className="max-w-[1200px] max-h-[200px] h-94">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={90}
              radius="lg"
              src="https://avatars.githubusercontent.com/u/64070490?s=200&v=4"
              width={90}
            />
            <div className="flex flex-col">
              <p className="text-md">@doniczka | Miłosz Strzałkowski</p>
              <p className="text-small text-default-500">doniczka.lol</p>
              <div className="flex gap-2">
                <Chip
                  avatar={<Avatar name="TS" src='https://th.bing.com/th/id/R.99a29ede35ec2ddf1f968bcdb17dbfdd?rik=XCSlxNe4MX5SOg&pid=ImgRaw&r=0d' />}
                  variant="flat"
                  color="primary"
                >
                  Typescript
                </Chip>
                <Chip avatar={<Avatar name="JS" src='https://th.bing.com/th/id/R.41ab93134d63c714a37f5c5a6c560faa?rik=VidAiYGI4alD%2bw&pid=ImgRaw&r=0' />} variant="flat" color="warning"
                >
                  Javascript</Chip>
                <Chip avatar={<Avatar name="React" src='https://cdn.discordapp.com/attachments/623564778379673630/1186093293512167515/OIP.png?ex=6591fe75&is=657f8975&hm=58399a4e5a2fce2971b8fced2a8b67fa2c18467154f404fbbf7240b85187014e&' />} variant="flat" color="secondary"
                >
                  React</Chip>

              </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>defeloper z pabianic proste co nie? tego teges.</p>
          </CardBody>
          <Divider />
          <CardFooter className='flex gap-3'>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/doniczek"
            >
              github
            </Link>
            <Link
              isExternal
              showAnchorIcon
              href="https://discord.com/users/485414045516562443"
            >
              discord
            </Link>

          </CardFooter>
        </Card>

      </div>
    </NextUIProvider>
  );
}
