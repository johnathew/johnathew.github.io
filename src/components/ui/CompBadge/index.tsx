import { Stack, ThemeIcon, Text } from '@mantine/core';
import { ReactNode } from 'react';

type CompBadgeProps = {
    color: string | undefined,
    label: string
    icon: ReactNode
    alt: string
};


const CompBadge = ({ color, label, icon, alt }: CompBadgeProps) => {
    return (
        <Stack align='center'>
            <ThemeIcon variant='transparent' aria-label={alt} color={color}>{icon}</ThemeIcon>
            <Text fw={400}>{label}</Text>
        </Stack>

    );
};

export default CompBadge;
