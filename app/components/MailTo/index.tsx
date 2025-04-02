type MailToProps = {
    email: string;
    subject?: string;
    body?: string;
    children: React.ReactNode;
    className?: string;

}

const Mailto = ({ email, subject = "", body = "", children, className }: MailToProps) => {
    const params =
        subject || body
            ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                body
            )}`
            : "";

    return (
        <a className={className} href={`mailto:${email}${params}`}>
            {children}
        </a>
    );
}

export default Mailto;