"use client";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
import { Icon } from "lucide-react";
import React from "react";

interface OpenDialogProps {
  label?: string;
  icon?: React.ReactElement<typeof Icon>;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const OpenDialog = ({ label, icon, title, description, children, className }: OpenDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className={`flex gap-2 ${className}`}>
        {icon}
        {label}
      </DialogTrigger>
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
