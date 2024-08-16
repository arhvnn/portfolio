import { card, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

export default function Cards() {
    return (
        <>
            <div className="CardsHolder flex flex-col">
                <Card
                    // key={index}
                    className="w-[375px] h-[40vh] min-w-[325px] shrink-0 hover:cursor-pointer mx-4"
                >
                    <CardHeader className="flex gap-3">
                        <Image
                            alt=""
                            height={40}
                            radius="sm"
                            src={"/" + card.image}
                            width={40}
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-md">{card.title}</p>
                            <p className="text-small text-default-500">
                                {card.subtitle}
                            </p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="font-bold">{card.featured_title}</p>
                        <ul className="mt-2 ml-4 list-disc">
                            {card.featured_list.map((item, index) => (
                                <li key={index}>
                                    {item.title}
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href={item.link}
                                    ></Link>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href={card.link}
                            className="bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500 bg-clip-text bg-transparent"
                        >
                            {card.link_title}
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
