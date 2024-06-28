import React, { useState } from "react";
import { Grid, Stack, Typography, Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../ui/components/header";
import { Footer } from "../../ui/components/footer";
import { ProfessorCard } from "../../ui/components/ProfessorCard";
import { professores } from "../../data/professores";
import { Professor } from "../../types/Professor";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Banner } from "../../ui/components/banner";
import ResearchLine from "../../ui/components/linhaPesquisa";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Header />
      <Banner />
      <Divider style={{border: '1px solid #F33F44'}}/>

      <Stack bgcolor={"#181B20"} pb={5}>
        <Typography variant="h4" padding={5} textAlign="center" color={"#F6BA19"} id="QuemSomos"  fontFamily={"Belezza"}>
          QUEM SOMOS
        </Typography>
        <Grid paddingX={10} paddingY={7}>
          <Typography color={'#F1965C'} fontSize={30} textAlign={'center'} fontFamily={"Belezza"}>
            O grupo tem como objetivo investigar, desenvolver e analisar ferramentas, práticas e metodologias que impulsionem a produtividade e a qualidade do desenvolvimento de software, desde métodos de educação, passando pela engenharia de requisitos, desenvolvimento colaborativo e indo até os métodos de verificação e validação de software.
          </Typography>
        </Grid>
      </Stack>

      
      <Divider style={{border: '1px solid #F33F44'}}/>

      <Stack bgcolor={"#181B20"} pb={5}>

      <Typography variant="h4" padding={5} textAlign="center" color={"#F6BA19"} id="LinhaPesquisa" fontFamily={"Belezza"}>
        NOSSAS ÁREAS DE PESQUISA
      </Typography>
      <ResearchLine />
      </Stack>

      <Divider style={{border: '1px solid #F33F44'}}/>

<Stack bgcolor={"#181B20"} pb={5}>
  <Typography variant="h4" padding={5} textAlign="center" color={"#F6BA19"} id={'Equipe'}  fontFamily={"Belezza"}>
    EQUIPE
  </Typography>
  <Grid paddingX={7}>
    {/* @ts-ignore */}
    <Carousel
      responsive={responsive}
      itemClass="carousel-item"
      swipeable={false}
      draggable={false}
    >
      {professores.map((professor: Professor) => (
        <ProfessorCard professor={professor} key={professor.id} />
      ))}
    </Carousel>
  </Grid>
</Stack>
      
      <Divider style={{border: '5px solid #F33F44'}}/>

      <Footer />
    </Stack>
  );
};

export default Home;
