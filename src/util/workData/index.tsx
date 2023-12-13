import classes from './workData.module.css';

const styles = {
    fontSize: '12px', marginLeft: '4px', opacity: 0.78
}

const jobContent = [
    {
        name: 'Helpdesk Specialist',
        date: '2021 - Present'
    },
    {
        name: 'Graduate Teaching Assistant',
        date: 'Spring 2021'
    },
    {
        name: 'Survey Technician',
        date: 'Fall 2020'
    },
    {
        name: 'Pharmacy Technician',
        date: '2016 - 2020'
    }
]


export const titleContent = jobContent.map((title) => {
    return (
        <p key={title.name} className={classes.title}>{title.name}
            <span style={styles}>{' '}{title.date} </span>
        </p>)
}
)
