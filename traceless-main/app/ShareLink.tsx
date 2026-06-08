import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Link2, Share } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";

const ShareLink = ({ userCode }: { userCode: string }) => {
  const { theme } = useTheme();
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const shareUrl = `${baseUrl.replace(/\/$/, "")}/share?code=${userCode}`;
  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link Copied");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="px-3 py-2 sm:py-2.5 rounded-lg"
            variant="outline"
            disabled={userCode ? false : true}
          >
            <Share size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-lg">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription className="text-sm">
              Anyone with this link can start a secure TraceLess connection with you
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex flex-col w-full gap-y-3 justify-center items-center">
              <div className="flex justify-center border rounded-lg w-fit p-3 bg-muted">
                <QRCodeSVG
                  value={shareUrl}
                  size={140}
                  bgColor={theme === "dark" ? "#000000" : "#ffffff"}
                  fgColor={theme === "dark" ? "#ffffff" : "#000000"}
                  level={"L"}
                  includeMargin={false}
                />
              </div>
              <div className="flex w-full justify-center gap-x-2">
                <Input
                  id="link"
                  defaultValue={shareUrl}
                  readOnly
                  className="text-xs rounded-lg"
                />
                <Button
                  type="button"
                  onClick={handleCopyClick}
                  className="px-3 py-2 rounded-lg"
                  variant="outline"
                >
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareLink;
