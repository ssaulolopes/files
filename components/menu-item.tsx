"use client"

interface MenuItemProps {
  title: string
  onClick: () => void
}

export function MenuItem({ title, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-sm text-gray-300 py-2 px-3 rounded hover:bg-[#1a3b6d] hover:text-white w-full text-left"
    >
      <span className="text-xs mr-2">•</span>
      <span>{title}</span>
    </button>
  )
}
