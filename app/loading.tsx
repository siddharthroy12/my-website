import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-full grid place-content-center">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}
