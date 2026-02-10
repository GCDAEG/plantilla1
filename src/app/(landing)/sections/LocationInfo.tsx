import { Section } from "@/components/layout/Section";
import {
  LocateFixedIcon,
  LocationEditIcon,
  MapIcon,
  MapPin,
  MapPlus,
  Phone,
} from "lucide-react";
import React from "react";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

interface LocationInfoProps {}

const LocationInfo: React.FC<LocationInfoProps> = ({}) => {
  return (
    <Section size="content">
      <div className="grid lg:grid-cols-3 px-6 md:px-36 py-16 gap-5 w-full">
        <div className="flex flex-col lg:flex-row text-center md:text-start items-center gap-5">
          <div className="aspect-square rounded-full h-20 bg-primary flex items-center justify-center">
            <MapPin className=" size-10 text-foreground" />
          </div>
          <p className="text-sm">333 Middle Winchendon Rd, Rindge, NH 03461</p>
        </div>
        <div className="flex flex-col lg:flex-row text-center md:text-start items-center gap-5">
          <div className="aspect-square rounded-full h-20 bg-primary flex items-center justify-center">
            <Phone className=" size-10 text-foreground" />
          </div>
          <p className="text-sm">125-711-811 125-668-886</p>
        </div>
        <div className="flex flex-col lg:flex-row text-center md:text-start items-center gap-5">
          <div className="aspect-square rounded-full h-20 bg-primary flex items-center justify-center">
            <LocateFixedIcon className=" size-10 text-foreground" />
          </div>
          <p className="text-sm">Support.gymcenter@gmail.com</p>
        </div>
      </div>
    </Section>
  );
};

export default LocationInfo;
