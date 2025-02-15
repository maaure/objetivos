"use client";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

interface OpenDialogProps {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const OpenDialog = ({ label, title, description, children, className }: OpenDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className={`${className}`}>{label}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          <DialogDescription className="hidden">{description}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OpenDialog;
