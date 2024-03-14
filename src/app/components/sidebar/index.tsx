'use client'

import Logo from './logo'

import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
  Menu,
} from 'lucide-react'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import * as Input from '../input'
import * as Collapisible from '@radix-ui/react-collapsible'
import { Button } from '../button'

export default function Sidebar() {
  return (
    <Collapisible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-y-auto border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:overflow-hidden lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapisible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapisible.Trigger>
      </div>

      <Collapisible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex "
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapisible.Content>
    </Collapisible.Root>
  )
}
