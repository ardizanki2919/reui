import { Input } from '@/registry/default/ui/base-input';

export default function InputDemo() {
  return (
    <div className="w-80">
      <Input type="text" placeholder="Disabled" disabled />
    </div>
  );
}
