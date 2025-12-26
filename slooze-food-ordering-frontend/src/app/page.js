// "use client";
// import { getUser } from "./auth";

// export default function Home() {
//   const user = getUser();

//   return (
//     <>
//       <h1>Food Ordering App</h1>
//       {user ? (
//         <p>
//           Logged in as <b>{user.name}</b> ({user.role} - {user.country})
//         </p>
//       ) : (
//         <p>Please select a user</p>
//       )}
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔴 IMPORTANT: prevent server/client mismatch
  if (!mounted) return null;

  return (
    <main>
      <h1>Food Ordering App</h1>

      {user ? (
        <p>
          Logged in as <b>{user.name}</b> ({user.role} - {user.country})
        </p>
      ) : (
        <p>Please select a user</p>
      )}
    </main>
  );
}
