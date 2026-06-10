import { useEffect, useState } from 'react';

const ROLES = ['DATA ANALYST', 'PYTHON DEVELOPER', 'BI DEVELOPER', 'ML ENTHUSIAST'];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === '') {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? 40 : 90
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="ml-1 w-[2px] h-[1.2em] bg-primary animate-pulse" />
    </span>
  );
}
