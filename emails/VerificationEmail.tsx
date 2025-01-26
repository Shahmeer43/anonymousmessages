interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <>
      <html lang="en" dir="ltr">
        <head>
          <title>Verification Code</title>
        </head>
        <body>
          <p>
            Here&apos;s {username} your verification code: {otp}
          </p>
        </body>
      </html>
    </>
  );
}
