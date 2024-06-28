import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box
} from "@mui/material";

export function ResearchLine() {
    const researchLines = [
        {
            id: 1,
            name: 'Engenharia de Requisitos',
            description: 'Pesquisa sobre técnicas e metodologias para a elicitação, análise, especificação e gestão de requisitos de software.'
        },
        {
            id: 2,
            name: 'Aspectos Sociais e Humanos em Análise e Desenvolvimento de Sistemas de Informação',
            description: 'Estudo dos fatores humanos e sociais que impactam o desenvolvimento e o uso de sistemas de informação.'
        },
        {
            id: 3,
            name: 'Desenvolvimento colaborativo de software',
            description: 'Pesquisa sobre técnicas, ferramentas e práticas para o desenvolvimento de software em equipe.'
        },
        {
            id: 4,
            name: 'Engenharia de Software Baseada em Busca',
            description: 'Utilização de algoritmos de busca e otimização para resolver problemas na engenharia de software.'
        },
        {
            id: 5,
            name: 'Ensino e Aprendizagem de Engenharia de Software',
            description: 'Estudo de métodos e práticas para melhorar o ensino e a aprendizagem em engenharia de software.'
        },
        {
            id: 6,
            name: 'Pesquisa em Ensino de Computação',
            description: 'Investigação de abordagens pedagógicas e curriculares para o ensino de ciência da computação.'
        },
        {
            id: 7,
            name: 'Verificação, Validação e Teste de Software',
            description: 'Pesquisa sobre técnicas e ferramentas para garantir a qualidade e correção de software.'
        },
    ];

    return (
        <Box display="flex" justifyContent="space-around" flexWrap="wrap" padding={2} gap={3}>
            {researchLines.map(line => (
                <Card key={line.id} style={{ margin: '10px', maxWidth: '300px', backgroundColor: '#F1965C', minHeight:250 }}>
                    <CardActionArea sx={{backgroundColor: '#F1965C', color: '#F33F44', alignItems: 'center', height: '100%'}}>
                        <CardContent>
                            <Typography variant="h5" style={{ marginBottom: '10px', fontWeight:'bold' }} textAlign={'center'}>{line.name}</Typography>
                            <Typography variant="body2" color="#333" fontSize={14} textAlign={'center'}>
                                {line.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}


export default ResearchLine;