import Hyperlink from "@components/ui/hyperlink";

export default function Footer() {
  return (
    <div className="flex justify-center p-2 mt-7">
      <div className="flex flex-col gap-4 text-xs">
        <div className="flex flex-row justify-between">
          <Hyperlink link="" title="Conditions of Use" />
          <Hyperlink link="" title="Privacy Notice" />
          <Hyperlink link="" title="Help" />
        </div>
        <div className="">© 1996-2023, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
}
