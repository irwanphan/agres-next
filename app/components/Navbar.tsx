import { Menu, MenuItem } from "./NavbarMenu";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="w-full py-2 px-2 mb-4 bg-gradient-to-r from-pink-600 via-cyan-700 to-cyan-400 rounded-full flex items-center overflow-x-auto">
      <div className="flex items-center gap-2 mr-4 text-sm text-white font-semibold">
        <Bars3Icon className="w-6 h-6 text-white" />
        <MenuItem label="CATEGORY" iconRight={<ChevronDownIcon className="w-4 h-4 ml-1" />} />
        <MenuItem label="BRANDS" iconRight={<ChevronDownIcon className="w-4 h-4 ml-1" />} />
      </div>
      <Menu className="flex-1 flex gap-6 items-center text-white font-semibold text-sm overflow-x-auto">
        <MenuItem label="PC BRAND" />
        <MenuItem label="PROCESSOR" />
        <MenuItem label="MOTHERBOARD" />
        <MenuItem label="VGA" />
        <MenuItem label="STORAGE" />
        <MenuItem label="RAM" />
        <MenuItem label="CASING" />
        <MenuItem label="PSU" />
        <MenuItem label="MONITOR" />
      </Menu>
      <div className="ml-auto flex items-center">
        <div className="flex items-center max-h-16 rounded-full px-3 py-1 ml-4">
          <img src="/images/free-agres-protect.png" alt="Agres Protect" className="h-10" />
        </div>
      </div>
    </nav>
  );
}
