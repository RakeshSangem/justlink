'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';

import { toast } from 'sonner';
import AvailableIcon from '@/components/icons/Available';
import Button from '@/components/button/Button';
import ErrorIcon from '@/components/icons/Error';
import { fetcher } from '@/lib/swr/use-links';

import useSWR from 'swr';
import { useDebouncedCallback } from 'use-debounce';

export default function PageClient() {
  const { data: user, mutate, isLoading } = useSWR('/api/user', fetcher);

  const [uName, setUName] = useState<string>('');
  const [isUsernameChanged, setIsUsernameChanged] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [isUsernameAvailable, setIsUsernameAvailable] =
    useState<boolean>(false);

  const debounce = useDebouncedCallback((value) => setUName(value), 500);

  useEffect(() => {
    if (uName.length > 1) {
      setIsUsernameChanged(true);
      setLoading(true);

      const checkUserExits = async () => {
        const res = await fetch(`/api/user/${uName}`);

        console.log('res', res);

        if (!res.ok) {
          setIsUsernameAvailable(true);
          setLoading(false);
          return;
        }
        setIsUsernameAvailable(false);
        setLoading(false);
      };
      checkUserExits();
    }
  }, [uName]);

  useEffect(() => {
    if (user?.user && user?.user?.username) {
      setUName(user.user.username);
    }
  }, [user]);

  const handleSaveClick = async () => {
    setButtonLoading(true);
    try {
      if (uName.length < 5) {
        toast.error('Username must be at least 7 characters');
        return;
      } else if (uName.length > 20) {
        toast.error('Username must be at most 20 characters');
        return;
      }

      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: uName }),
      });

      if (!res.ok) {
        toast.error('Error updating username');
        return;
      }
      await mutate();
      setIsUsernameChanged(false);
      setButtonLoading(false);
      toast.success('Username updated successfully');
    } catch (error) {
      toast.error('Error updating username');
    }
  };

  return (
    <div className="space-y-4 mx-auto py-6 max-w-2xl">
      <div className="flex flex-col space-y-1 bg-[#18181B] border border-[#242426] px-7 py-6 rounded-lg h-auto transition-height duration-1000 ease-in-out">
        <div className="mb-1">
          <h4 className="text-lg font-normal text-white">Username</h4>
          <p className="text-white/60 text-sm font-light">
            The username will serve as your distinctive identifier for the page.
          </p>
          {!isLoading ? (
            <input
              type="text"
              // value={uName}
              defaultValue={
                user?.user && user?.user?.username ? user.user.username : ''
              }
              onChange={(e) => debounce(e.target.value)}
              placeholder={'ex: rakeshdev'}
              spellCheck={false}
              className="w-full max-w-96 text-sm sm:text-base rounded-md mt-5 text-white/70 focus:text-white rounded-l bg-transparent py-2 px-3 border border-zinc-800 focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/30"
            />
          ) : (
            <div className="w-full h-10 mt-5 bg-zinc-900 rounded-md animate-pulse" />
          )}
          <div className="h-5 mt-1">
            {uName.trim() !== '' &&
              loading &&
              uName !== user?.user?.username && (
                <p className="text-white/60 text-sm">
                  Checking availability...
                </p>
              )}
            {uName.trim() !== '' &&
              !loading &&
              uName !== user?.user?.username && (
                <span
                  className="flex items-center text-sm font-light gap-x-1"
                  style={{ color: isUsernameAvailable ? 'lightgreen' : 'red' }}
                >
                  {isUsernameAvailable ? (
                    <>
                      <AvailableIcon />
                      Username is available.
                    </>
                  ) : (
                    <>
                      <ErrorIcon />
                      Username already exists!
                    </>
                  )}
                </span>
              )}
          </div>
        </div>

        <Button
          disabled={!isUsernameChanged || !isUsernameAvailable || !uName}
          text="Save changes"
          loading={buttonLoading}
          onClick={handleSaveClick}
          variant="primary"
        />
      </div>
    </div>
  );
}
