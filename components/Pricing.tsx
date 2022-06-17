import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    Flex,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
  
  const optionsLanding = [
    { id: 1, desc: 'Landing page' },
    { id: 2, desc: 'Custom domain' },
    { id: 3, desc: 'Hosting' },
    { id: 3, desc: 'SSL certificate' },
    { id: 3, desc: 'Technical Support' },
  ];

  const optionsBusiness = [
    { id: 1, desc: 'Multiple pages website' },
    { id: 1, desc: 'Fully responsive' },
    { id: 2, desc: 'Hosting' },
    { id: 3, desc: 'Custom domain' },
    { id: 3, desc: 'SSL certificate' },
    { id: 3, desc: 'SEO Features' },
    { id: 3, desc: 'Technical support' },
    { id: 3, desc: 'Analytics and metrics' },
    { id: 3, desc: 'Unlimited Bandwidth' },
    { id: 3, desc: 'Video Storage' },
  ];



  interface PackageTierProps {
    title: string;
    options: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
  }
  interface PackageTierProps2 {
    title: string;
    options2: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
  }



  const PackageTier = ({
    title,
    options,
    typePlan,
    checked = false,
  }: PackageTierProps) => {
    const colorTextLight = checked ? 'gray.900' : 'gray.900';
    const bgColorLight = checked ? 'purple.200' : 'purple.200';
  
    const colorTextDark = checked ? 'gray.900' : 'gray.900';
    const bgColorDark = checked ? 'purple.200' : 'purple.200';
  
    return (
      <Stack
        width={'100vw'}
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading  size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading color={useColorModeValue('gray.600', "gray.100")} size={'xl'}>{typePlan}</Heading>
        <Stack>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
            Get Started
          </Button>
        </Stack>
      </Stack>
    );
  };
  const Pricing = () => {
    return (
      <Flex  justifyContent={'center'} alignContent={'center'} alignItems={'center'} direction={'column'} id="plans" py={6} px={5} >
        <Stack spacing={4}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}>
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}>
              <Heading  size={'2xl'}>
                Find a plan that suits <Text   bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)">Your Business needs</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: '100%',
                md: '60%',
              }}>
              <Text textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quod in iure vero. Facilis magnam, sed officiis commodi labore
                odit.
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier title={'Landing'} typePlan="CHF 500" options={optionsLanding} />
          <Divider />
          <PackageTier
            title={'Business'}
            checked={true}
            typePlan="CHF 1000"
            options={optionsBusiness}
          />
          <Divider />
        </Stack>
      </Flex>
    );
  };
  
  export default Pricing;