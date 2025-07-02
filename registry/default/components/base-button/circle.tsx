import { Button } from '@/registry/default/ui/base-button';
import { CalendarCheck } from 'lucide-react';

export default function Component() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" shape="circle">
        Circle button
      </Button>
      <Button variant="outline" shape="circle" mode="icon">
        <CalendarCheck />
      </Button>
    </div>
  );
}
