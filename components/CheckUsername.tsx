'use client';

import { useCallback, useState, useEffect, ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const CheckUsername = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

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

  return (
    <div>
      <form className="border border-gray-600 p-2 rounded-md flex items-center">
        <span className="text-xl font-medium text-white/60">justlink.com/</span>
        <input
          className="bg-transparent outline-none border-none px-1 text-xl font-normal"
          type="text"
          defaultValue={username}
          onChange={handleInputChange}
          placeholder="your-link"
        />
        <button
          className="bg-white text-black rounded-md px-5 py-1.5 font-medium"
          disabled={loading}
        >
          Generate
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
};

export default CheckUsername;
