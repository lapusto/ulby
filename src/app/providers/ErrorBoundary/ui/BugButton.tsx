import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const throwErr = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={throwErr}>
            throw error
        </Button>
    );
};
