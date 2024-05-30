import { MenuItem } from "@headlessui/react";


const UserMenu = () => {
    return (
        <MenuItem>
        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
          
          Applied Jobs
          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
        </button>
      </MenuItem>
    );
};

export default UserMenu;