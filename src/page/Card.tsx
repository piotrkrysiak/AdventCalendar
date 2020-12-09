import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import Meta from "antd/lib/card/Meta";
import "../App.css";

interface CardData {
  id: string;
  title: string;
  description: string;
  link: string;
  preLink: string;
  preTitle: string;
  preDescription: string;
}

const Cards = () => {
  const [data, setData] = useState<CardData[]>([
    {
      id: "1",
      title: "Holidate",
      description: "2020, Netflix",
      link:
        "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/holidatemovieposter.jpg?itok=ZR8D22kC",
      preTitle: "Wtorek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/8f/cd/05/8fcd0544b3881a4b28ce3f0c0c74b594.jpg",
    },
    {
      id: "2",
      title: "Elf",
      description: "2003, Netflix",
      link: "https://fwcdn.pl/fpo/78/48/97848/7307841.6.jpg",
      preTitle: "Środa",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/ac/27/57/ac2757396ca58e8e1f09b84adcc8473b.jpg",
    },
    {
      id: "3",
      title: "Klaus",
      description: "2019, Netflix",
      link:
        "https://i.pinimg.com/564x/00/71/3c/00713c038448ad943633753a7f8bcb02.jpg",
      preTitle: "Czwartek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/ce/2e/6b/ce2e6be535f187ff8d758891cd403902.jpg",
    },
    {
      id: "4",
      title: "Zamiana z Księżniczką",
      description: "2018, Netflix",
      link: "https://66.media.tumblr.com/4b5483bd5f436a9b4c48840347db2d13/tumblr_pim2wbidZA1u35xk1o1_1280.png",
      preTitle: "Piątek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/0a/e8/3d/0ae83d993f57308f45bb1928ea48eed6.jpg",
    },
    {
      id: "5",
      title: "Święta na zamówienie",
      description: "2018, Netflix",
      link: "https://fwcdn.pl/fpo/46/91/814691/7867287.6.jpg",
      preTitle: "Sobota",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/df/28/3f/df283f85af00f43079cdd23614fd73e6.jpg",
    },
    {
      id: "6",
      title: "Zamiana z Księżniczką 2",
      description: "2020, Netflix",
      link: "https://www.nflix.pl/img/netflix-polska/occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUWIw1aF-FXtwSid-cE6x3ev-v-qfbUTWNhHB01K3nttIhkZRvEjmcf3xCeG47LOQv0Bc7el-E9zxIn_I4WfKeCEzURGl7dMHz5EnWfRWMLR4MkkJS5OfSscMX6MkA.jpg",
      preTitle: "Niedziela",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/8a/ca/3e/8aca3eaec509be5674efcd1f2224a747.jpg",
    },
    {
      id: "7",
      title: "Pada Shrek",
      description: "2007, Netflix",
      link: "https://static.wikia.nocookie.net/dreamworks-polska/images/2/28/7229784.3.jpg/revision/latest/top-crop/width/360/height/450?cb=20170222140828&path-prefix=pl",
      preTitle: "Poniedziałek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/78/90/de/7890dec09d470586628dfba2eb8211d2.jpg",
    },
    {
      id: "8",
      title: "Zły Mikołaj",
      description: "2003, HBO",
      link: "https://assets.upflix.pl/media/plakat/2003/bad-santa__300_427.jpg",
      preTitle: "Wtorek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/0c/f9/65/0cf96503b90288407bf695eb5b38f8ae.jpg",
    },
    {
      id: "9",
      title: "Planeta Singli 2",
      description: "2018, Netflix",
      link: "https://fwcdn.pl/fpo/49/15/804915/7864993.3.jpg",
      preTitle: "Środa",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/71/be/13/71be13214ea821bd44543433a82ccc08.jpg",
    },
    {
      id: "10",
      title: "Rodzinny dom Wariatów",
      description: "2005, CDA",
      link:
        "https://i.pinimg.com/564x/d4/fe/96/d4fe96ce234f669803485da11ab19f8a.jpg",
      preTitle: "Czwartek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/62/45/24/624524c5b959ce5c44e80041b8b2549e.jpg",
    },
    {
      id: "11",
      title: "Listy do M",
      description: "2010, Player",
      link: "https://ecsmedia.pl/c/listy-do-m-b-iext46050946.jpg",
      preTitle: "Piątek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/f3/ad/6c/f3ad6cb7011f2805f852c47c32358a3b.jpg",
    },
    {
      id: "12",
      title: "Holliday",
      description: "2006, CDA/Amazon",
      link:
        "https://assets.upflix.pl/media/plakat/2006/the-holiday__300_427.jpg",

      preTitle: "Sobota",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/0e/78/08/0e7808d1b770fe90b3f06a43939f34bf.jpg",
    },
    {
      id: "13",
      title: "Love Actually",
      description: "2003, CDA/Amazon",
      link:
        "https://images-na.ssl-images-amazon.com/images/I/51CyMjx9JRL._SY445_.jpg",
      preTitle: "Niedziela",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/3c/59/c9/3c59c965fd3c685a5040f3a7839bc1b4.jpg",
    },
    {
      id: "14",
      title: "Kraina Lodu",
      description: "2012, CDA",
      link: "https://ecsmedia.pl/c/kraina-lodu-2-b-iext56945856.jpg",
      preTitle: "Poniedziałek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/1e/96/2a/1e962afac5d05b082bc4e07959fed486.jpg",
    },
    {
      id: "15",
      title: "Jack Frost",
      description: "1998, CDA",
      link: "https://fwcdn.pl/fpo/65/11/6511/6922483.6.jpg",
      preTitle: "Wtorek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/7d/65/6a/7d656a8c30794bd65d731ae8f35630fe.jpg",
    },
    {
      id: "16",
      title: "Swiąteczny kalendarz",
      description: "2018, Netflix",
      link: "https://nflix.pl/img/netflix-polska/occ-0-138-2774.1.nflxso.net/art/a5ac1/792d4983c7bcc5222e8186a333457eae310a5ac1.jpg",
      preTitle: "Środa",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/a8/85/74/a8857499c928110bea632e1bdc42a261.jpg",
    },
    {
      id: "17",
      title: "Grinch",
      description: "2018, Netflix",
      link: "https://i.dailymail.co.uk/1s/2019/12/02/16/21716116-7747435-image-m-12_1575303030276.jpg",
      preTitle: "Czwartek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/5d/52/17/5d5217122465dc7e21bc651db3488792.jpg",
    },
    {
      id: "18",
      title: "Świąteczny spadek",
      description: "2017, Netflix",
      link: "https://fwcdn.pl/fpo/83/62/798362/7869877.3.jpg",
      preTitle: "Piątek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/18/a3/1b/18a31b7a6cec06a1ddec64f974257dba.jpg",
    },
    {
      id: "19",
      title: "12 Świątecznych randek",
      description: "2011, CDA",
      link: "https://fwcdn.pl/fpo/83/38/618338/7590741.3.jpg",
      preTitle: "Sobota",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/a8/61/33/a86133cc795fc9b3dc2d6d3f18eb2455.jpg",
    },
    {
      id: "20",
      title: "Cud na 34 ulicy",
      description: "1994, CDA",
      link: "https://assets.upflix.pl/media/plakat/1994/cud-na-34-ulicy__300_427.jpg",
      preTitle: "Niedziela",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/c5/78/cb/c578cbe6c85a115c6ba793ed5fae25ab.jpg",
    },
    {
      id: "21",
      title: "Świąteczny książe",
      description: "2017, Netflix",
      link: "https://fwcdn.pl/fpo/74/74/797474/7817993.3.jpg",
      preTitle: "Poniedziałek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/02/1b/c2/021bc2879195f027e4453f06735e13fb.jpg",
    },
    {
      id: "22",
      title: "Artur ratuje gwiazdkę",
      description: "2011, Netflix",
      link: "https://repertuary.pl/images/dbimages/film_8143_large_1.jpg",
      preTitle: "Wtorek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/236x/47/80/a3/4780a383a5f2cada3a1a4e47855a77b9.jpg",
    },
    {
      id: "23",
      title: "Ekspres Polarny",
      description: "2004, Netflix",
      link:
        "https://i.pinimg.com/564x/df/92/97/df929702e60cf446cf568c66040e24be.jpg",
      preTitle: "Środa",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/f8/09/a9/f809a939e1eb4c7af1f13ed051e9bc82.jpg",
    },
    {
      id: "24",
      title: "Rudolf Czerwononosy",
      description: "1998, YouTube",
      link:
        "https://image.ceneostatic.pl/data/products/117746/i-rudolf-czerwononosy-renifer-i-wyspa-zaginionych-zabawek-rudolph-the-red-nosed-reindeer-the-island-of-misfit-toys-dvd.jpg",
      preTitle: "Czwartek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/originals/fd/97/18/fd97185b5b1a1503e52f97b9c83d7fc3.jpg",
    },
  ]);

  function clickc(person: CardData) {
    var preTitle = person.title;
    var preDescription = person.description;
    var preLink = person.link;
    setData((currentPeople) =>
      currentPeople.map((x) =>
        x.id === person.id
          ? {
              ...x,
              preTitle: preTitle,
              preDescription: preDescription,
              preLink: preLink,
            }
          : x
      )
    );
  }

  return (
    <>
      <Row gutter={28}>
        <Col span={3.5}>
          <Card
            hoverable
            style={{ width: 210, margin: 10, height: 379, borderRadius: 10 }}
            cover={
              <img
                alt="example"
                style={{ width: 200, height: 270 }}
                src={
                  "https://www.halberesford.com/content/images/2018/07/null.png"
                }
              />
            }
          >
            <Meta
              title={"Poniedziałek"}
              description={"Trzydziesty Listopada"}
            />
          </Card>
        </Col>
        {data.map((person) => {
          return (
            <Col key={person.id} span={3.5}>
              <Card
                hoverable
                style={{ width: 210, margin: 10, borderRadius: 10 }}
                cover={
                  <img
                    alt="example"
                    src={person.preLink}
                    style={{ width: 210, height: 270, borderRadius: 10 }}
                  />
                }
              >
                <Meta
                  title={person.preTitle}
                  description={person.preDescription}
                />
                <div className="ButtonClass">
                  <Button onClick={() => clickc(person)}>Otwórz</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Cards;
