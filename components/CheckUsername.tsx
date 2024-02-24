'use client';

import {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  ChangeEvent,
} from 'react';
import { redirect, useSearchParams, useRouter } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

export default function CheckUsername() {
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isUsernameAvailable, setIsUsernameAvailable] =
    useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const debounce = useDebouncedCallback(
    useCallback((value) => {
      setUsername(value.trim());
    }, []),
    500,
    { maxWait: 1000 }
  );

  useEffect(() => {
    const checkUsernameAvailability = async () => {
      if (!username) return;

      setLoading(true);
      try {
        const response = await fetch(`/api/user/${username}`);
        if (response.ok) {
          setIsUsernameAvailable(false);
        } else {
          setIsUsernameAvailable(true);
        }
      } catch (error) {
        console.error('Error checking username availability:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUsernameAvailability();
  }, [username]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debounce(value);
  };

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();

    let route;

    if (!username) {
      route = `/register`;
    } else {
      route = `/register?username=` + username;
    }

    router.push(route);
  };

  return (
    <div>
      <form className="border border-white/60 p-1 rounded-md flex items-center">
        <span className="sm:text-base text-sm font-medium text-white/60 ml-2">
          Justlink.io/
        </span>
        <input
          className="peer bg-transparent outline-none text-sm border-none px-1 sm:text-base font-medium"
          type="text"
          defaultValue={username}
          onChange={handleInputChange}
          placeholder="yourname"
        />
        {/* TODO: configure the button based on needs */}
        {/* 
        <Button
          disabled={loading || !username || !isUsernameAvailable}
          onClick={handleSignUp} // Call handleSignUp function when button is clicked
          variant="primary"
          text="Claim your link"
        /> */}

        <button
          type="submit"
          onClick={handleSignUp}
          className="bg-white w-max text-sm text-black px-3 py-2 rounded-sm hover:bg-gray-100"
        >
          Claim your link
        </button>
      </form>

      {username && (
        <span
          className={`text-sm text-center py-2 block font-light mx-auto ${isUsernameAvailable ? 'text-green-500' : 'text-red-500'}`}
        >
          {loading
            ? 'Checking...'
            : isUsernameAvailable
              ? 'Available'
              : 'Not Available'}
        </span>
      )}
    </div>
  );
}
