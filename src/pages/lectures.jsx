/* eslint-disable react/prop-types */
import React from 'react';

import { Card, Grid, Container, Typography, CardContent } from '@mui/material';

const LectureCard = ({ label, link }) => (
  <Card sx={{ p: 2 }}>
    <CardContent>
      <iframe
        width="100%"
        height="100%"
        src={link}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </CardContent>
    <Typography fontFamily="Poppins" textAlign="center" variant="subtitle2" flexWrap>
      {' '}
      {label}{' '}
    </Typography>
  </Card>
);

const LecturesIndex = () => {
  const lectures = [
    {
      id: 1,
      label: 'Introduction to Accounting',
      link: 'https://www.youtube.com/embed/rXI53JMYEnU',
      autoplay: true,
    },
    {
      id: 2,
      label: 'Forms of Business Organisations',
      link: 'https://www.youtube.com/embed/QsVBWJSzJS4',
    },
    {
      id: 3,
      label: 'राष्ट्रीय आय | National Income | संगणक',
      link: 'https://www.youtube.com/embed/xI6qEpFmQyc',
    },
    {
      id: 4,
      label: 'अंकेक्षण का परिचय | Auditing',
      link: 'https://www.youtube.com/embed/BG-u1CBZBU4',
    },
    {
      id: 4,
      label: 'National Income and Related Aggregates',
      link: 'https://www.youtube.com/embed/GUJ5I3EHIf8',
    },
  ];
  return (
    <Container>
      <Grid container spacing={2}>
        {lectures.map((l) => (
          <Grid item md={4} sm={12} xs={12} key={l.id}>
            <LectureCard {...l} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LecturesIndex;
