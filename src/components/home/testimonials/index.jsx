/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Paper, Stack, Container, Typography } from '@mui/material';

const RenderTestimonial = ({ description, user }) => (
  <Paper sx={{ height: 250, pd: 2 }}>
    <Stack direction="column" justifyContent="center" alignItems="center" height="100%" spacing={5}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Icon icon="ei:user" width={65} />
        <Typography fontFamily="Poppins" fontWeight={600} fontSize={25} textAlign="center">
          {user}
        </Typography>
      </Stack>
      <Typography fontFamily="Poppins" fontWeight={500} fontSize={20} textAlign="center">
        &quot; {description} &quot;
      </Typography>
    </Stack>
  </Paper>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      description: "Outstanding service! I can't believe how great it was.",
      user: 'John Doe',
    },
    { id: 2, description: 'These guys are amazing! Highly recommended!', user: 'Alice Smith' },
    { id: 3, description: "I'm so happy with their work. Truly exceptional!", user: 'Bob Johnson' },
    { id: 4, description: "The best experience I've ever had. Thank you!", user: 'Emily Brown' },
    { id: 5, description: 'Another fantastic experience!', user: 'Laura White' },
    { id: 6, description: "I couldn't be happier with their service!", user: 'Michael Wilson' },
  ];

  const renderItems = testimonials.map((t) => <RenderTestimonial {...t} />);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        fontFamily="Poppins"
        fontSize={30}
        fontWeight={600}
        color="#E9204F"
        textAlign="center"
      >
        Testimonials
      </Typography>
      <Stack direction="row" justifyContent="center" width="100%" height="100%" mt={1}>
        <AliceCarousel
          items={renderItems}
          responsive={{
            0: { items: 1 },
          }}
          autoPlay
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={2000}
          infinite
        />
      </Stack>
    </Container>
  );
};

export default Testimonials;
