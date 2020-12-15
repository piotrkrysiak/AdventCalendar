import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import Meta from "antd/lib/card/Meta";
import "../app/layout/style.css";
import { ICardData } from "../app/models/card";

const Cards = () => {
  const [data, setData] = useState<ICardData[]>([
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
      linkFilmu:
        "//www.netflix.com/watch/81034553?trackId=13752289&tctx=0%2C3%2Cf10e9be2bca0eb73f1c2a3f305ffd0b8e62d52b1%3Aff2fb81a9f6dc2816655fc3cfc8e8630b9b38b8d%2Cf10e9be2bca0eb73f1c2a3f305ffd0b8e62d52b1%3Aff2fb81a9f6dc2816655fc3cfc8e8630b9b38b8d%2C%2C",
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
      linkFilmu: "https://www.netflix.com/watch/60031255?trackId=13752289&tctx=0%2C4%2C45c22c84cffc7616acdfde94c3a44dcc0213894c%3Aa3da69f01442f51a19220d79100a37d1680bd9fe%2C45c22c84cffc7616acdfde94c3a44dcc0213894c%3Aa3da69f01442f51a19220d79100a37d1680bd9fe%2C%2C",
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
      linkFilmu: "https://www.netflix.com/watch/80183187?trackId=13752289&tctx=0%2C0%2C187f4155993d27f9c827711e612124622bf12478%3Aaf6af5e6055b745c85f1576540530aac51c57816%2C187f4155993d27f9c827711e612124622bf12478%3Aaf6af5e6055b745c85f1576540530aac51c57816%2C%2C",
    },
    {
      id: "4",
      title: "Zamiana z Księżniczką",
      description: "2018, Netflix",
      link:
        "https://66.media.tumblr.com/4b5483bd5f436a9b4c48840347db2d13/tumblr_pim2wbidZA1u35xk1o1_1280.png",
      preTitle: "Piątek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/0a/e8/3d/0ae83d993f57308f45bb1928ea48eed6.jpg",
      linkFilmu: "https://www.netflix.com/watch/80242926?trackId=13752289&tctx=0%2C0%2C0674b519aa655b1548c41c832f56efd4f798224b%3Ab3fc156e5fbca03a111fba737ff52fd706eb72c2%2C0674b519aa655b1548c41c832f56efd4f798224b%3Ab3fc156e5fbca03a111fba737ff52fd706eb72c2%2C%2C",
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
      linkFilmu: "https://www.netflix.com/watch/81088157?trackId=13752289&tctx=0%2C1%2C877677fb99f53d5bb339e52736025cd1e95ce027%3A41a11b0628b15146520558ac6f48475600aef852%2C877677fb99f53d5bb339e52736025cd1e95ce027%3A41a11b0628b15146520558ac6f48475600aef852%2C%2C",
    },
    {
      id: "6",
      title: "Zamiana z Księżniczką 2",
      description: "2020, Netflix",
      link:
        "https://www.nflix.pl/img/netflix-polska/occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUWIw1aF-FXtwSid-cE6x3ev-v-qfbUTWNhHB01K3nttIhkZRvEjmcf3xCeG47LOQv0Bc7el-E9zxIn_I4WfKeCEzURGl7dMHz5EnWfRWMLR4MkkJS5OfSscMX6MkA.jpg",
      preTitle: "Niedziela",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/8a/ca/3e/8aca3eaec509be5674efcd1f2224a747.jpg",
      linkFilmu: "https://www.netflix.com/watch/81084350?trackId=13752289&tctx=0%2C1%2C0674b519aa655b1548c41c832f56efd4f798224b%3Ab3fc156e5fbca03a111fba737ff52fd706eb72c2%2C0674b519aa655b1548c41c832f56efd4f798224b%3Ab3fc156e5fbca03a111fba737ff52fd706eb72c2%2C%2C",
    },
    {
      id: "7",
      title: "Pada Shrek",
      description: "2007, Netflix",
      link: "https://fwcdn.pl/fpo/62/63/386263/7229784_1.3.jpg",
      preTitle: "Poniedziałek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/78/90/de/7890dec09d470586628dfba2eb8211d2.jpg",
      linkFilmu: "https://www.netflix.com/watch/70242143?trackId=13752289&tctx=0%2C0%2C346e2531328bfd41c8a4b8ae78af75ca4bba9564%3A1b5c8329ad720cd9b1ead9ab486d5a27272a57d9%2C346e2531328bfd41c8a4b8ae78af75ca4bba9564%3A1b5c8329ad720cd9b1ead9ab486d5a27272a57d9%2C%2C",
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
      linkFilmu: "https://hbogo.pl/filmy/zly-mikolaj",
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
      linkFilmu: "https://www.netflix.com/watch/81168905?trackId=13752289&tctx=0%2C2%2C3c5ce696bae639f5d43560c945fc13558da88931%3A4fdd7cfdf03a7394f82a13685be5a6b00106cec6%2C3c5ce696bae639f5d43560c945fc13558da88931%3A4fdd7cfdf03a7394f82a13685be5a6b00106cec6%2C%2C",
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
      linkFilmu: "https://www.cda.pl/video/1747041f",
    },
    {
      id: "11",
      title: "Listy do M",
      description: "2010, Player",
      link: "https://plasterlodzki.pl/wp-content/uploads/2011/12/listydom.jpg",
      preTitle: "Piątek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/f3/ad/6c/f3ad6cb7011f2805f852c47c32358a3b.jpg",
      linkFilmu: "https://player.pl/filmy-online/listy-do-m,25291?ap=&gclid=Cj0KCQiA2uH-BRCCARIsAEeef3lANZryT352vx8nezIaqztT-oHnm0bxBSQod8aIZFjJlETuDPLzG_oaAmsMEALw_wcB&gclsrc=aw.ds",
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
      linkFilmu: "https://www.primevideo.com/detail/The-Holiday/0IZIBHD4008M0U6IER3TKUKPT8",
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
      linkFilmu: "https://www.amazon.com/Love-Actually-Bill-Nighy/dp/B001JIES4Q",
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
      linkFilmu: "https://www.cda.pl/video/6273992cc",
    },
    {
      id: "15",
      title: "Jack Frost",
      description: "1998, Netlix",
      link: "https://fwcdn.pl/fpo/65/11/6511/6922483.6.jpg",
      preTitle: "Wtorek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/7d/65/6a/7d656a8c30794bd65d731ae8f35630fe.jpg",
      linkFilmu: "https://www.cda.pl/video/536456a9",
    },
    {
      id: "16",
      title: "Swiąteczny kalendarz",
      description: "2018, Netflix",
      link:
        "https://nflix.pl/img/netflix-polska/occ-0-138-2774.1.nflxso.net/art/a5ac1/792d4983c7bcc5222e8186a333457eae310a5ac1.jpg",
      preTitle: "Środa",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/a8/85/74/a8857499c928110bea632e1bdc42a261.jpg",
      linkFilmu: "https://www.netflix.com/watch/80242446?trackId=13752289&tctx=0%2C3%2C65a81c186a59dfdb91b22be574e467eed5880c09%3A2c5cd97fb27da23afc0e764f6710306944a3d75f%2C65a81c186a59dfdb91b22be574e467eed5880c09%3A2c5cd97fb27da23afc0e764f6710306944a3d75f%2C%2C",
    },
    {
      id: "17",
      title: "Grinch",
      description: "2018, Netflix",
      link:
        "https://iushorizon.com/wp-content/uploads/2018/11/grinch_ver3.jpg",
      preTitle: "Czwartek",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/5d/52/17/5d5217122465dc7e21bc651db3488792.jpg",
      linkFilmu: "https://www.netflix.com/watch/80996790?trackId=13752289&tctx=0%2C1%2C32a51f13c1523dbac54e5c4667df26326199e9fa%3A69c01b0438e585aa0d2978caa7bc2f631de922bb%2C32a51f13c1523dbac54e5c4667df26326199e9fa%3A69c01b0438e585aa0d2978caa7bc2f631de922bb%2C%2C",
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
      linkFilmu: "https://www.netflix.com/watch/80177441?trackId=13752289&tctx=0%2C0%2C5b001e3af89f282a2ecb8989dec9b2deebe86da6%3A8bbd334a04538ac4b5d5709eeb43b52c7147a05d%2C5b001e3af89f282a2ecb8989dec9b2deebe86da6%3A8bbd334a04538ac4b5d5709eeb43b52c7147a05d%2C%2C",
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
      linkFilmu: "https://www.cda.pl/video/15651638",
    },
    {
      id: "20",
      title: "Cud na 34 ulicy",
      description: "1994, CDA",
      link:
        "https://assets.upflix.pl/media/plakat/1994/cud-na-34-ulicy__300_427.jpg",
      preTitle: "Niedziela",
      preDescription: "",
      preLink:
        "https://i.pinimg.com/564x/c5/78/cb/c578cbe6c85a115c6ba793ed5fae25ab.jpg",
      linkFilmu: "https://www.cda.pl/video/41688705d",
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
      linkFilmu: "https://www.netflix.com/watch/81029841?trackId=13752289&tctx=0%2C5%2C5b001e3af89f282a2ecb8989dec9b2deebe86da6%3A8bbd334a04538ac4b5d5709eeb43b52c7147a05d%2C5b001e3af89f282a2ecb8989dec9b2deebe86da6%3A8bbd334a04538ac4b5d5709eeb43b52c7147a05d%2C%2C",
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
      linkFilmu: "https://www.netflix.com/watch/70202138?trackId=13752289&tctx=0%2C0%2Ce42eb8efed0d9e1c8aefce087644d94d0c65bc0d%3A5adba199dbe9105ce922ef95195e2aaa473697f3%2Ce42eb8efed0d9e1c8aefce087644d94d0c65bc0d%3A5adba199dbe9105ce922ef95195e2aaa473697f3%2C%2C",
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
      linkFilmu: "https://www.netflix.com/watch/70011200?trackId=13752289&tctx=0%2C0%2C303a6a236b675357cd36da09ae66ea3d20466428%3Ab61f5ac7fc907bb1bc6f8967ef6ea1eb91748217%2C303a6a236b675357cd36da09ae66ea3d20466428%3Ab61f5ac7fc907bb1bc6f8967ef6ea1eb91748217%2C%2C",
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
      linkFilmu: "https://www.youtube.com/watch?v=TCraG9KREdg&t=40s",
    },
  ]);

  const [isOpen, setOpen] = useState(true);

  function clickc(person: ICardData) {
    setOpen(!isOpen);
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

  function buttonChoice(person: ICardData) {
    if (person.preDescription !== "") {
      return (
        <Button>
          <a href={person.linkFilmu} target="blank">
            Obejrzyj film
          </a>
        </Button>
      );
    } else {
      return <Button>Otwórz</Button>;
    }
  }
  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <Row gutter={[16, 16]}>
        {data.map((person) => {
          return (
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <Card
                hoverable
                style={{
                  margin: 10,
                  marginBottom: 10,
                  borderRadius: 40,
                }}
                cover={
                  <img
                    alt="example"
                    src={person.preLink}
                    style={{
                      borderTopLeftRadius: 40,
                      borderTopRightRadius: 40,
                    }}
                  />
                }
              >
                <Meta
                  title={person.preTitle}
                  description={person.preDescription}
                />
                <div className="ButtonClass">
                  <div
                    onClick={() => {
                      clickc(person);
                    }}
                  >
                    {buttonChoice(person)}
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Cards;
