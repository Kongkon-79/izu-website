import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type AuthCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[430px] rounded-xl border border-[#cfe4ed] bg-[#f4fbff] px-5 py-6 shadow-[0_3px_5px_rgba(26,78,105,0.16)] sm:px-6",
        className
      )}
    >
      <Link
        href="/"
        aria-label="Go to Workyapa home page"
        className="mx-auto block w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2875bb]"
      >
        <Image
          src="/images/workyapa-logo.png"
          alt="Workyapa"
          width={185}
          height={60}
          className="mx-auto h-auto w-[185px]"
          priority
        />
      </Link>
      <div className="mt-5">
        <h1 className="text-2xl font-extrabold tracking-[-0.025em] text-[#2875bb] sm:text-[28px]">
          {title}
        </h1>
        <p className="mt-1 text-xs text-[#78858f]">{description}</p>
      </div>
      <div className="mt-6">{children}</div>
      {footer ? <div className="mt-8 text-center text-xs text-[#68747d]">{footer}</div> : null}
    </div>
  );
}
