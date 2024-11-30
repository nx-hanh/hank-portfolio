'use client';
import { useSidebar } from '@/components/ui/sidebar';

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="block lg:hidden">
      Toggle Sidebar
    </button>
  );
}
