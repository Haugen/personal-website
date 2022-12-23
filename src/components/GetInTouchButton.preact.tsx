import { Popover, Transition } from "@headlessui/react";

import Button from "./Button";

export default function GetInTouchButton() {
  let timeout: ReturnType<typeof setTimeout>;

  const copyEmail = () => {
    navigator.clipboard.writeText("tobiashaugen@gmail.com");
  };

  return (
    <Popover className="flex flex-row items-center">
      <Popover.Button as="div" onClick={() => copyEmail()}>
        <Button>Get in touch</Button>
      </Popover.Button>
      <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0 -translate-x-4"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-500 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0 translate-x-4"
      >
        <Popover.Panel>
          {({ close }: { close: () => void }) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              close();
            }, 2000);

            return (
              <div className="text-sm md:text-base font-bold ml-8">
                Email copied
                <span className="hidden md:inline"> to clipboard</span>
              </div>
            );
          }}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
