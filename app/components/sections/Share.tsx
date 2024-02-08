"use client";
import { PAGE_SECTION } from "@/app/atoms/activeSection";
import { useIntersectSection } from "@/app/hooks/useIntersectSection";
import { useRef } from "react";
import { Element } from "react-scroll";
import { ShareButton } from "../ShareButton";

export const ShareSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  useIntersectSection(ref, PAGE_SECTION.Share);

  return (
    <Element name={PAGE_SECTION.Share}>
      <section
        ref={ref}
        className="min-h-screen flex justify-center flex-col pt-24"
      >
        <h2 className="max-w-max font-bold text-4xl md:text-6xl tracking-tight border-slate-950 border-b-8">
          Buy Me A Beer
        </h2>
        <h3 className="font-bold md:text-2xl tracking-tight mt-2">
          応援してくれてもいいんですよ
        </h3>
        <div className="flex flex-1 items-center justify-center">
          <ShareButton />
        </div>
      </section>
    </Element>
  );
};