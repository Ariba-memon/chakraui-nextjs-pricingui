'use client';
import { Button } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';

export default function GiveName() {
    const router = useRouter();
    return (
        <p>
            My Name is <i>Ariba Memon</i> <b>
                I enroll in web 3.0 course</b>
            <br />
            <Button colorScheme='facebook'> <a href='https://www.facebook.com/thearibamemon/'> Facebook</a></Button>
            <Button colorScheme='cyan'> <a href='https://www.linkedin.com/in/thearibamemon/'> linkedin</a></Button>
            <br />
            <Button colorScheme='pink' type="button" onClick={() => router.push('/')}>
                Back to Home
            </Button>

        </p>
    )
}
