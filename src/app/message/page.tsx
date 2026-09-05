import React from "react";
import MessageContainer from "./_components/message-container";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingFooter } from "@/components/landing/landing-footer";
import { MessageAuthGuard } from "./_components/message-auth-guard";

const MessagePage = () => {
  return (
    <MessageAuthGuard>
      <div className="pt-16 overflow-x-clip">
        <LandingHeader active="message" />
        <MessageContainer />
        <LandingFooter />
      </div>
    </MessageAuthGuard>
  );
};

export default MessagePage;
