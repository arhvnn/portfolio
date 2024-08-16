import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

interface CardInfo {
    title: string;
    subtitle: string;
    image: string;
    featured_title: string;
    featured_list: {
        title: string;
        link: string;
        image: string;
        description: string;
    }[];
    link_title: string;
    link: string;
}

export default function Edu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null); // Define type for selected card
    const cards_info = [
        {
            title: "Data Science and Machine Learning",
            subtitle: "The National Higher School of AI",
            image: "ensia.png",
            featured_title: "Featured Projects",
            featured_list: [
                {
                    title: "Electricity Management System",
                    description: "", // Corrected from discription to description
                    image: "",
                    link: "https://github.com/ziyad0081/DSA-ECMS",
                },
                {
                    title: "Rouh El Quran Academy",
                    description: "", // Corrected from discription to description
                    image: "",
                    link: "https://github.com/arhvnn/rouh-el-quran-front-end",
                },
                {
                    title: "Healthcare Network Optimisation",
                    description: "", // Corrected from discription to description
                    image: "",
                    link: "https://github.com/arhvnn/Algiers-HNO",
                },
            ],
            link_title: "Visit my profile on DataCamp",
            link: "https://ensia.edu.dz",
        },
        {
            title: "Associate Data Scientist",
            subtitle: "DataCamp",
            image: "DataCamp.webp",
            featured_title: "Featured Projects",
            featured_list: [
                {
                    title: "Exploring Airbnb Market Trends in NYC",
                    description:
                        "In this project, I analyzed Airbnb listings in New York City to uncover market trends...",
                    image: "room_type_count_plot.png",
                    link: "",
                },
                {
                    title: "Investigating Netflix Movies",
                    description:
                        "Analyzed Netflix movie data to determine if the average duration of movies is decreasing...",
                    image: "movie_duration_by_year.png",
                    link: "",
                },
                {
                    title: "Visualizing the History of Nobel Prize Winners",
                    description: "", // Corrected from discription to description
                    image: "",
                    link: "",
                },
                { title: "Analysing Crime in Los Angeles", link: "" },
            ],
            link_title: "Visit my profile on DataCamp",
            link: "https://www.datacamp.com/portfolio/arhvnnn",
        },
    ];
    return (
        <section className="Education h-[80vh] w-[100vw]" id="Education">
            <div className="Circle absolute filter -z-10 bg-gradient-to-br from-[#1A2980] to-[#26D0CE] w-[400px] lg:w-[600px]  top-[110vh] h-[300px] opacity-20 right-0 rounded-full blur-3xl bg-opacity-70 " />
            <div className="Circle absolute filter -z-10 bg-gradient-to-br from-[#cc2b5e] to-[#753a88] w-[400px] lg:w-[600px]  top-[145vh] h-[300px] opacity-20 rounded-full blur-3xl bg-opacity-70 " />

            <div>&#8203;</div>
            <h1 className=" ml-16 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                Education
            </h1>
            <div className="flex justify-center">
                <div className="flex items-center md:gap-12 h-[60vh] overflow-x-auto">
                    {cards_info.map((card, index) => (
                        <>
                            <Card
                                key={index}
                                isPressable
                                onPress={() => {
                                    onOpen();
                                    setSelectedCard(card); // Set selected card
                                }}
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
                                    <p className="font-bold">
                                        {card.featured_title}
                                    </p>
                                    <ul className="mt-2 ml-4 list-disc">
                                        {card.featured_list.map(
                                            (item, index) => (
                                                <li key={index}>
                                                    {item.title}
                                                    <Link
                                                        isExternal
                                                        showAnchorIcon
                                                        href={item.link}
                                                    ></Link>
                                                </li>
                                            )
                                        )}
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
                            <Modal
                                className="max-h-[80vh] overflow-auto"
                                backdrop="blur"
                                isOpen={isOpen}
                                onOpenChange={onOpenChange}
                            >
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex gap-3 items-center">
                                                <Image
                                                    alt=""
                                                    height={40}
                                                    radius="sm"
                                                    src={
                                                        "/" +
                                                        selectedCard?.image
                                                    }
                                                    width={40}
                                                />
                                                <div className="flex flex-col items-start">
                                                    <p className="text-md">
                                                        {selectedCard?.title}
                                                    </p>
                                                    <p className="text-small text-default-500">
                                                        {selectedCard?.subtitle}
                                                    </p>
                                                </div>
                                            </ModalHeader>
                                            <ModalBody>
                                                {selectedCard?.featured_list.map(
                                                    (featured, index) => (
                                                        <Card
                                                            key={index}
                                                            className="w-[375px] h-[40vh] min-w-[325px] shrink-0 hover:cursor-pointer mx-4"
                                                        >
                                                            <CardHeader className="flex gap-3">
                                                                <div className="flex flex-col items-start">
                                                                    <p className="text-md">
                                                                        {
                                                                            featured.title
                                                                        }
                                                                    </p>
                                                                    <p className="text-small text-default-500">
                                                                        {
                                                                            // card.subtitle
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </CardHeader>
                                                            <Divider />
                                                            <CardBody>
                                                                <Image
                                                                    alt=""
                                                                    radius="sm"
                                                                    src={
                                                                        "/" +
                                                                        featured.image
                                                                    }
                                                                    // height={40}
                                                                    // width={40}
                                                                />
                                                            </CardBody>
                                                            <Divider />
                                                            {/* <CardFooter>
                                                                <Link
                                                                    isExternal
                                                                    showAnchorIcon
                                                                    href={
                                                                        card.link
                                                                    }
                                                                    className="bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500 bg-clip-text bg-transparent"
                                                                >
                                                                    {
                                                                        card.link_title
                                                                    }
                                                                </Link>
                                                            </CardFooter> */}
                                                        </Card>
                                                    )
                                                )}
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    color="danger"
                                                    variant="light"
                                                    onPress={onClose}
                                                >
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
