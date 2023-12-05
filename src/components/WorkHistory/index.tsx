import { Timeline, Text, Container, List, Divider } from '@mantine/core';
import classes from './WorkHistory.module.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Title from '../ui/Title';
import { useMantineColorScheme } from '@mantine/core';


const WorkHistory = () => {

  const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, },
  }

  const ref = useRef(null)
  const control = useAnimation()
  const inView = useInView(ref)
  const { colorScheme } = useMantineColorScheme();
  const color = colorScheme === 'dark' ? 'var(--mantine-color-orange-2)' : 'var(--mantine-color-blue-5)';
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div variants={boxVariant}
      initial="hidden"
      animate={control}
      ref={ref}
      transition={{ type: 'spring', duration: 0.7 }}>
      <Container size='md' id='work' p='md'>
        <Title title="Work History" />
        <div className={classes.wrapper}>
          <Timeline radius="md" active={3} lineWidth={2} bulletSize={12} color={color}>
            <Timeline.Item title="Helpdesk Specialist" className={classes.jobTitle}>
              <Divider mb="xs" />
              <Text size="xs" className={classes.locHistory}>
                Maximus Federal - Remote; McAllen, TX
                <span style={{ fontStyle: 'normal' }}> 2021 - Present </span>
              </Text>
              <List size="sm" spacing="xs" center className={classes.list}>
                <List.Item>
                  Troubleshoot official CDC software related issues for healthcare professionals and
                  the public.
                </List.Item>
                <List.Item>
                  Process escalation service request tickets as needed to ensure service levels are
                  maintained.
                </List.Item>
                <List.Item>
                  Coordinate with official CDC representatives to receive reports on new system
                  updates.
                </List.Item>
                <List.Item>
                  Collaborate with other Helpdesk Specialists to share new procedures and critical
                  information.
                </List.Item>
              </List>
            </Timeline.Item>
            <Timeline.Item title="Graduate Teaching Assistant" className={classes.jobTitle}>
              <Divider mb="xs" />
              <Text size="xs" className={classes.locHistory}>
                University of Texas Rio Grande Valley - Remote; Edinburg, TX
                <span style={{ fontStyle: 'normal' }}> Spring 2021</span>
              </Text>
              <List size="sm" spacing="xs" center className={classes.list}>
                <List.Item mt={0}>
                  Assisted undergraduate Chemistry students with course material, holding weekly Q&A
                  sessions
                </List.Item>
                <List.Item>
                  Conducted online test reviews and held office hours for personal tutoring
                </List.Item>
                <List.Item>
                  Graded homework assignments and exams, providing feedback to students
                </List.Item>
                <List.Item>
                  Coordinated with Proffesors to ensure specific concepts and principes were understood properly
                </List.Item>
              </List>
            </Timeline.Item>
            <Timeline.Item title="Survey Technician" className={classes.jobTitle}>
              <Divider mb="xs" />
              <Text size="xs" className={classes.locHistory}>
                SAMES, Inc. - McAllen, TX
                <span style={{ fontStyle: 'normal' }}> October 2021 - December 2021</span>
              </Text>
              <List size="sm" spacing="xs" center className={classes.list}>
                <List.Item mt={0}>
                  Mapped out boundaries for businesses and residential homes using GPS technology
                </List.Item>
                <List.Item>
                  Provided measurements and layouts for construction projects in both metropolitan and
                  rural areas
                </List.Item>
                <List.Item>
                  Fullfilled boundary surveys requested by homeowners and businesses for refinancing
                  or design planning
                </List.Item>
              </List>
            </Timeline.Item>
            <Timeline.Item title="Pharmacy Technician" className={classes.jobTitle}>
              <Divider mb="xs" />
              <Text size="xs" className={classes.locHistory}>
                Walgreens Pharmacy- Palmview, TX
                <span style={{ fontStyle: 'normal' }}>October 2016 - May 2020</span>
              </Text>
              <List size="sm" spacing="xs" center className={classes.list}>
                <List.Item mt={0}>
                  Utilized propriety software to manage patients{"'"} prescriptions, resolve rejected
                  insurance claims, and scheduled refills for medication
                </List.Item>
                <List.Item lh='xs'>
                  Maintained strong attention to detail, making sure all patients received the correct
                  prescription(s); professionally handled confidential patient information
                </List.Item>
                <List.Item>
                  Provided excellent customer service, assisting patients with questions and concerns
                  regarding their prescriptions
                </List.Item>
                <List.Item mb="xs">
                  Collaborated with other pharmacy technicians to ensure all prescriptions were filled
                  in a timely manner
                </List.Item>
              </List>
            </Timeline.Item>
          </Timeline>
        </div>
      </Container>
    </motion.div>
  );
};

export default WorkHistory;
