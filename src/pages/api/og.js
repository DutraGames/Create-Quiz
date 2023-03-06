import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'edge',
};

export default async function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    fontSize: 40,
                    color: 'white',
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>MONTANDO QUIZ</h1>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
