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
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
  
  const optionsLanding = [
    { id: 1, desc: 'Single page' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
    { id: 3, desc: 'Monthly Updates' },
  ];

  const optionsPersonal = [
    { id: 1, desc: '1 coconut' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
    { id: 3, desc: 'Monthly Updates' },
  ];
  const optionsBusiness = [
    { id: 1, desc: '1 coconut' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
    { id: 3, desc: 'Monthly Updates' },
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
        <Heading size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading size={'xl'}>{typePlan}</Heading>
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
      <Box py={6} px={5} min={'100vh'}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
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
              <Heading size={'2xl'}>
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
          <PackageTier title={'Landing'} typePlan="$500" options={optionsLanding} />
          <Divider />
          <PackageTier
            title={'Personal'}
            checked={true}
            typePlan="$800"
            options={optionsPersonal}
          />
          <Divider />
          <PackageTier title={'Business'} typePlan="$1000" options={optionsBusiness} />
        </Stack>
      </Box>
    );
  };
  
  export default Pricing;