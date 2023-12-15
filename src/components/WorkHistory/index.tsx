import { Timeline, Container, List, Divider } from '@mantine/core';
import classes from './WorkHistory.module.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Title from '../ui/Title';
import { useMantineColorScheme } from '@mantine/core';
import { boxVariant } from '../../util/projectData';
import { titleContent } from '../../util/workData';


const WorkHistory = () => {
  const ref = useRef(null)
  const control = useAnimation()
  const inView = useInView(ref)
  const { colorScheme } = useMantineColorScheme();
  const color = colorScheme === 'dark' ? 'var(--mantine-color-orange-2)' : 'var(--mantine-color-blue-9)';
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
      transition={{ type: 'ease', duration: 0.5 }}
    >
      <Container className={classes.mainWrapper} id='work' ref={ref}>
        <Title title="Work History" />
        <Timeline className={classes.timeLine} active={3} lineWidth={2} bulletSize={9} color={color}>
          <Timeline.Item title={titleContent[0]}>
            <Divider color={colorScheme === 'light' ? 'var(--mantine-color-gray-8)' : 'var(--mantine-color-gray-4'} mb="xs" label='Maximus Federal - Remote; McAllen, TX' labelPosition='left' />
            <List size="sm" spacing="xs" center className={classes.list}>
              <List.Item lh={1.2}>
                Troubleshoot official CDC software related issues for healthcare professionals and
                the public, providing technical support via phone and email
              </List.Item>
              <List.Item lh={1.2}>
                Process escalation service request tickets as needed to ensure service levels are
                maintained, accurately documenting all troubleshooting steps and resolutions
              </List.Item>
              <List.Item lh={1.3}>
                Attend training sessions to learn new software and procedures; tasked with dispersing all new information to other Helpdesk Specialists
              </List.Item>
              <List.Item>
                Monitor and maintain the Salesforce queue to ensure all tickets are closed properly and within the alloted time of the SLA
              </List.Item>
            </List>
          </Timeline.Item>
          <Timeline.Item title={titleContent[1]} className={classes.jobTitle}>
            <Divider size='xs' color={colorScheme === 'light' ? 'var(--mantine-color-gray-8)' : 'var(--mantine-color-gray-4'} mb="xs" label='University of Texas Rio Grande Valley - Remote; Edinburg, TX' labelPosition='left' />
            <List size="sm" spacing="sm" center className={classes.list}>
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
          <Timeline.Item title={[titleContent[2]]} className={classes.jobTitle}>
            <Divider size='xs' color={colorScheme === 'light' ? 'var(--mantine-color-gray-8)' : 'var(--mantine-color-gray-4'} mb="xs" label='SAMES, Inc. - McAllen, TX' labelPosition='left' />
            <List size="sm" spacing="sm" center className={classes.list}>
              <List.Item mt={0}>
                Mapped out boundaries for local businesses and residential homes using GPS technology
              </List.Item>
              <List.Item>
                Provided measurements and layouts for construction projects in both metropolitan and
                rural areas
              </List.Item>
              <List.Item>
                Fulfilled boundary surveys requested by homeowners and businesses for refinancing
                or design planning
              </List.Item>
            </List>
          </Timeline.Item>
          <Timeline.Item title={[titleContent[3]]} className={classes.jobTitle}>
            <Divider size='xs' color={colorScheme === 'light' ? 'var(--mantine-color-gray-8)' : 'var(--mantine-color-gray-4'} mb="xs" label='Walgreens Pharmacy- Palmview, TX' labelPosition='left' />
            <List size="sm" spacing="sm" center className={classes.list}>
              <List.Item mt={0} lh={1.2}>
                Utilized propriety software to manage patients{"'"} prescriptions, resolve rejected
                insurance claims, and scheduled refills for maintenance medications
              </List.Item>
              <List.Item lh={1.2}>
                Maintained strong attention to detail, making sure all patients received the correct
                prescription(s); professionally handled confidential patient information
              </List.Item>
              <List.Item lh={1.1}>
                Provided excellent customer service, ensuring each patient was greeted courteously and received their medication
                in a timely manner 
              </List.Item>
              <List.Item lh={1.1}>
                Trained new employees on the use of the pharmacy software and the proper procedures
                for handling prescriptions
              </List.Item>
            </List>
          </Timeline.Item>
        </Timeline>
      </Container>
    </motion.div>
  );
};

export default WorkHistory;
