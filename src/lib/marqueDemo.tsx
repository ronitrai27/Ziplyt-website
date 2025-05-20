/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "sahil",
    username: "@sahil",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/test1.png",
  },
  {
    name: "gupta",
    username: "@gupta",
    body: "Fixed my T.V in no minutes. They are actually fast.",
    img: "/test2.png",
  },
  {
    name: "sanjeev",
    username: "@aarti",
    body: "The service was excellent and the staff was very polite. Highly recommended!",
    img: "/test3.png",
  },
  {
    name: "rahul",
    username: "@rahul123",
    body: "Booked an electrician and he was at my doorstep in 10 minutes. Great platform!",
    img: "/test4.png",
  },
  {
    name: "vikas",
    username: "@neha_k",
    body: "Super easy to use and very reliable. I’ve already recommended it to my friends.",
    img: "/test5.png",
  },
  {
    name: "neha",
    username: "@vikas_mech",
    body: "Used it twice now. Both times the workers were professional and punctual.",
    img: "/test6.png",
  },
  {
    name: "hemant",
    username: "@priya88",
    body: "Honestly didn’t expect it to be this smooth. Booked a plumber within seconds.",
    img: "/test7.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit min-[700px]:w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "bg-light/30 border-light hover:bg-primary-blue hover:text-white"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="46" height="46" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[18px] font-medium  font-poppins text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium font-inter">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-[15px] font-inter">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
