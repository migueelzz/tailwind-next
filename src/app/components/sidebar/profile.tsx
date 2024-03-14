import { LogOut } from 'lucide-react'
import { Button } from '../button'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/migueelzz.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Miguel Lemes
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          miguellemes005@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
