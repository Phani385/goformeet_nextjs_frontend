import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DownloadAppModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}  
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download our App to Book a Meeting</DialogTitle>
          <DialogDescription>
            Download our app to book a meeting with the host.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Looking to book a host on our web app? Download our app to book a
            meeting with the host.
          </p>
          <Link href="https://onelink.to/zyv2v2">
            <Button className="mt-3 mx-auto secondary">Download App</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadAppModal;
