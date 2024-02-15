/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { RiMoreFill, RiPencilFill } from '@remixicon/react';

import { LabelType } from 'common/types/label';

import { Button } from 'components/ui/button';

interface LabelProps {
  label: LabelType;
}

export function Label({ label }: LabelProps) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 group flex justify-between mb-2 text-sm rounded-md bg-slate-100/80 dark:bg-slate-800 p-2 px-4">
      <div className="flex items-center justify-center gap-3">
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: label.color }}
        ></div>
        <div>{label.name}</div>
      </div>

      <div className="hidden group-hover:flex items-center justify-center gap-4">
        <Button variant="ghost" size="xs" className="!p-0 !bg-transparent h-4">
          <RiPencilFill
            className="text-slate-500 hover:text-black dark:hover:text-white"
            size={16}
          />
        </Button>
        <Button variant="ghost" size="xs" className="!p-0 !bg-transparent h-4">
          <RiMoreFill
            className="text-slate-500 hover:text-black dark:hover:text-white"
            size={16}
          />
        </Button>
      </div>
    </div>
  );
}
