import { Box, Flex, Icon, Text, SimpleGrid, Heading } from "@chakra-ui/react";

export default function Features() {
    const Feature = (props) => {
      return (
        <Box >
          <Flex
            alignItems="center"
            justifyContent="center"
            w={8}
            h={8}
            mb={4}
            rounded="full"
            color={`${props.color}.600`}
            _dark={{
              color: `${props.color}.900`,
            }}
            bg={`${props.color}.100`}
          >
            <Icon
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
          <Heading
            mb={2}
            fontWeight="semibold"
            lineHeight="shorter"
            fontSize={"md"}
            _light={{
              color: "gray.900",
            }}
          >
            {props.title}
          </Heading>
          <Text
            fontSize="sm"
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </Text>
        </Box>
      );
    };
  
    return (
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "gray.900",
        }}
        p={20}
        w="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          px={8}
          py={20}
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="xl"
        >
          <Box
            textAlign={{
              lg: "center",
            }}
          >
            <Text
              mt={2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{
                color: "gray.900",
              }}
            >
              Features
            </Text>
            <Text
              mt={4}
              maxW="2xl"
              fontSize="2xl"
              mx={{
                lg: "auto",
              }}
              color="gray.500"
              _dark={{
                color: "gray.400",
              }}
            >
              Get insights to dig down into what&apos;s powering your growth the
              most.
            </Text>
          </Box>
          <SimpleGrid
            columns={{
              base: 1,
              sm: 2,
              md: 3,
              lg: 3,
            }}
            spacingX={{
              base: 16,
              lg: 24,
            }}
            spacingY={20}
            mt={6}
          >
            <Feature
              color="red"
              title="Personal Emails"
              icon={
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              }
            >
              Hand crafted dashboards for everything from Recurring Revenue to
              Customer Churn.
            </Feature>
  
            <Feature
              color="pink"
              title="Why a beaker icon?"
              icon={
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                  clipRule="evenodd"
                />
              }
            >
              Your central hub that helps you see, and react to, absolutely
              everything that’s happening.
            </Feature>
  
            <Feature
              color="yellow"
              title="Clickable"
              icon={
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              }
            >
              Stay informed with daily, weekly, or monthly reports on all your
              insights data.
            </Feature>
  
            <Feature
              color="green"
              title="Finger Printing"
              icon={
                <>
                  <path
                    fillRule="evenodd"
                    d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </>
              }
            >
              Our forecasting is your magical crystal ball that helps you predict
              and plan for the future.
            </Feature>
            <Feature
              color="purple"
              title="Performance on Fire"
              icon={
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              }
            >
              How does your company compare? Learn how your company stacks up in
              the industry.
            </Feature>
            <Feature
              color="blue"
              title="Love is in the Air"
              icon={
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              }
            >
              Organize your customers to bring meaningful and comparative insights
              across your dashboards.
            </Feature>
          
  
          </SimpleGrid>
        </Box>
      </Flex>
    );
  };

