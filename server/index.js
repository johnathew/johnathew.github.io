import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate, useAnimationFrame } from "framer-motion";
import { LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { motion as motion$1 } from "motion/react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const Header = () => {
  return /* @__PURE__ */ jsxs("header", { className: "w-full p-2 border-b-[0.5px] text-cyan-800 bg-slate-950 flex justify-start", children: [
    /* @__PURE__ */ jsx("a", { href: "/", "aria-describedby": "home", className: "text-cyan-400 px-2 mx-2 border-2 rounded-sm hover:bg-cyan-400 hover:text-slate-900 hover:shadow-md", children: "JK" }),
    /* @__PURE__ */ jsx("a", { href: "/projects", className: "text-cyan-400 mx-2 hover:underline", children: "Projects" }),
    /* @__PURE__ */ jsx("a", { href: "/gallery", className: "text-cyan-400 mx-2 hover:underline", children: "Gallery" }),
    /* @__PURE__ */ jsx("a", { href: "/severed", className: "text-cyan-400 mx-2 hover:underline", children: "Severed" })
  ] });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("base", {
        href: "/"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(Header, {}), children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack, /* @__PURE__ */ jsx("a", {
      href: "/",
      className: "text-blue-500 underline",
      children: "Go back to the homepage"
    }), " "]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};
function CursorBlinker() {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: cursorVariants,
      animate: "blinking",
      className: "inline-block h-5 w-[4px] translate-y-1 bg-cyan-400"
    }
  );
}
function AnimatedText() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Hello, my name is John.",
    "I am a graduate student at UTRGV.",
    "Welcome to my website."
  ];
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(
    rounded,
    (latest) => baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
  useEffect(() => {
    animate(count, 70, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "m-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-cyan-400", children: ">" }),
    /* @__PURE__ */ jsx(motion.span, { className: "inline ml-2", children: displayText }),
    /* @__PURE__ */ jsx(CursorBlinker, {})
  ] });
}
const reactIcon = "/assets/react-CHdo91hT.svg";
function RotatingCube() {
  const cubeRef = useRef(null);
  useAnimationFrame((t) => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${t / 100}deg) rotateY(${t / 100}deg)`;
    }
  });
  return /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", "aria-label": "Rotating 3D cube", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "relative w-20 h-20 transform-style-preserve-3d",
      ref: cubeRef,
      children: ["front", "right", "back", "left", "top", "bottom"].map((side) => /* @__PURE__ */ jsx("div", { className: `side ${side} flex w-full justify-center h-full items-center`, role: "img", "aria-label": `Cube side ${side}`, children: /* @__PURE__ */ jsx("img", { src: reactIcon, alt: "React logo", className: "h-10 w-auto" }) }, side))
    }
  ) });
}
const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%"
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"]
  }
};
const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%"
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"]
  }
};
const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%"
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"]
  }
};
const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%"
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%"
  }
};
const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%"
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"]
  }
};
const Hero = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "flex w-full h-svh items-center justify-around antialiased overflow-hidden",
      "aria-labelledby": "hero-heading",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center align-middle absolute", children: [
        /* @__PURE__ */ jsx(RotatingCube, {}),
        /* @__PURE__ */ jsx(SVGs, {}),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-3/4", children: [
          /* @__PURE__ */ jsxs(
            "h1",
            {
              id: "hero-heading",
              className: "text-4xl sm:text-5xl text-white font-light z-10",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-cyan-400", children: "John" }),
                " Kornegay"
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "md:text-md text-sm text-slate-200", children: /* @__PURE__ */ jsx(AnimatedText, {}) })
        ] })
      ] })
    }
  );
};
const SVGs = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "350",
      height: "300",
      viewBox: "0 0 858 434",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "flex",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
            stroke: "url(#grad1)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M568 200H841C846.523 200 851 195.523 851 190V40",
            stroke: "url(#grad2)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
            stroke: "url(#grad3)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
            stroke: "url(#grad4)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M380 168V17C380 11.4772 384.477 7 390 7H414",
            stroke: "url(#grad5)"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx(
            motion.linearGradient,
            {
              variants: grad5,
              animate: "animate",
              initial: "initial",
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: Math.random() * 2
              },
              id: "grad5",
              children: /* @__PURE__ */ jsx(GradientColors, {})
            }
          ),
          /* @__PURE__ */ jsx(
            motion.linearGradient,
            {
              variants: grad1,
              animate: "animate",
              initial: "initial",
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: Math.random() * 2
              },
              id: "grad1",
              children: /* @__PURE__ */ jsx(GradientColors, {})
            }
          ),
          /* @__PURE__ */ jsx(
            motion.linearGradient,
            {
              variants: grad2,
              animate: "animate",
              initial: "initial",
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: Math.random() * 2
              },
              id: "grad2",
              children: /* @__PURE__ */ jsx(GradientColors, {})
            }
          ),
          /* @__PURE__ */ jsx(
            motion.linearGradient,
            {
              variants: grad3,
              animate: "animate",
              initial: "initial",
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: Math.random() * 2
              },
              id: "grad3",
              children: /* @__PURE__ */ jsx(GradientColors, {})
            }
          ),
          /* @__PURE__ */ jsx(
            motion.linearGradient,
            {
              variants: grad4,
              animate: "animate",
              initial: "initial",
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: Math.random() * 2
              },
              id: "grad4",
              children: /* @__PURE__ */ jsx(GradientColors, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "851",
            cy: "34",
            r: "6.5",
            fill: "var(--slate-700)",
            stroke: "var(--slate-600)"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "770",
            cy: "427",
            r: "6.5",
            fill: "var(--slate-700)",
            stroke: "var(--slate-600)"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "142",
            cy: "427",
            r: "6.5",
            fill: "var(--slate-700)",
            stroke: "var(--slate-600)"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "6.5",
            cy: "398.5",
            r: "6",
            fill: "var(--slate-700)",
            stroke: "var(--slate-600)"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "420.5",
            cy: "6.5",
            r: "6",
            fill: "var(--slate-700)",
            stroke: "var(--slate-600)"
          }
        )
      ]
    }
  );
};
const GradientColors = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("stop", { stopColor: "#18CCFC", stopOpacity: "0" }),
    /* @__PURE__ */ jsx("stop", { stopColor: "#18CCFC" }),
    /* @__PURE__ */ jsx("stop", { offset: "0.325", stopColor: "#6344F5" }),
    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#AE48FF", stopOpacity: "0" })
  ] });
};
const contactIcons = [
  { icon: /* @__PURE__ */ jsx(LinkedinLogo, { size: 30 }), link: "https://www.linkedin.com/in/john-kornegay-00541411b/", label: "LinkedIn" },
  { icon: /* @__PURE__ */ jsx(GithubLogo, { size: 30 }), link: "https://github.com/johnathew", label: "GitHub" },
  { icon: /* @__PURE__ */ jsx(InstagramLogo, { size: 30 }), link: "https://www.instagram.com/johnathew_k/", label: "Instagram" }
];
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};
const SocialLinks = () => /* @__PURE__ */ jsx("section", { id: "External Links", className: "w-full px-4 mt-2 items-center justify-center flex flex-col", "aria-labelledby": "links-heading", children: /* @__PURE__ */ jsx(
  motion$1.ul,
  {
    variants: containerVariants,
    initial: "hidden",
    animate: "show",
    className: "p-4 flex",
    children: contactIcons.map((item, index) => /* @__PURE__ */ jsx(
      motion$1.li,
      {
        variants: itemVariants,
        className: "bg-transparent m-4 text-cyan-400 rounded shadow",
        children: /* @__PURE__ */ jsx("a", { href: item.link, className: "hover:text-slate-50", target: "_blank", rel: "noopener noreferrer", "aria-label": item.label, children: item.icon })
      },
      index
    ))
  }
) });
const HeroDescription = () => /* @__PURE__ */ jsxs("section", { id: "about", className: "w-full px-4 items-center flex flex-col", "aria-labelledby": "about-heading", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full sm:w-1/2", children: [
    /* @__PURE__ */ jsx("hr", { className: "flex-grow border-t-[0.5px] border-gray-300", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("h2", { id: "about-heading", className: "px-5 text-3xl font-light h-full text-cyan-400 text-center", children: "About" }),
    /* @__PURE__ */ jsx("hr", { className: "flex-grow border-t-[0.5px] border-gray-300", "aria-hidden": "true" })
  ] }),
  /* @__PURE__ */ jsxs("p", { className: "text-slate-50 text-center py-2 font-extralight text-sm/7 md:text-lg/7 md:w-1/2 sm:w-3/4 w-full", children: [
    "Hello, my name is John Kornegay. I am currently a computer science graduate student at UTRGV in Edinburg, TX. As a software developer with a passion for technology, I enjoy coding, problem-solving, being creative, and learning about new technologies.",
    /* @__PURE__ */ jsx("br", {}),
    "For any business opportunities, please send an email to: ",
    /* @__PURE__ */ jsx("a", { className: "text-cyan-400 hover:underline hover:underline-offset-3", href: "mailto:jakornegay01@gmail.com", "aria-label": "Email John Kornegay", children: "jakornegay01@gmail.com" })
  ] })
] });
function meta({}) {
  return [{
    title: "John's Resume"
  }, {
    name: "description",
    content: "Welcome to my website!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(HeroDescription, {}), /* @__PURE__ */ jsx(SocialLinks, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const meAndDiego = "/assets/me-CfFDxmgp.png";
const meAndDiego2 = "/assets/me2-Dhh1Jmy1.png";
const diego = "/assets/diego-D20eSWJO.png";
const Carousel = () => {
  const images = [meAndDiego, meAndDiego2, diego];
  return /* @__PURE__ */ jsx(motion.div, { className: "carousel overflow-hidden relative w-full", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "inner-carousel flex",
      drag: "x",
      dragConstraints: { left: -((images.length - 1) * 300), right: 0 },
      initial: { x: 0 },
      whileTap: { cursor: "grabbing" },
      children: images.map((src, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "item w-[100px] p-4",
          whileHover: { scale: 1.05 },
          children: /* @__PURE__ */ jsx("img", { src, alt: `Slide ${index + 1}`, className: "rounded-xl w-full h-auto" })
        },
        index
      ))
    }
  ) });
};
const Gallery = () => /* @__PURE__ */ jsx("section", {
  className: "w-dvw h-dvh",
  "aria-labelledby": "image-gallery",
  children: /* @__PURE__ */ jsx(Carousel, {})
});
const gallery = withComponentProps(Gallery);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gallery
}, Symbol.toStringTag, { value: "Module" }));
const projects = () => {
  return /* @__PURE__ */ jsx("div", {
    children: "under construction"
  });
};
const projects$1 = withComponentProps(projects);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: projects$1
}, Symbol.toStringTag, { value: "Module" }));
const ScaryNumbers = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const generateGridNumbers = () => Array.from(
    { length: 20 },
    () => digits[Math.floor(Math.random() * digits.length)]
  );
  const scaryNumbers = useMemo(() => {
    return Array.from({ length: 20 }).map(() => generateGridNumbers().join(""));
  }, []);
  const content = scaryNumbers.map((row, rowIndex) => /* @__PURE__ */ jsx(motion$1.ul, { className: "flex flex-wrap justify-around md:text-center", children: row.split("").map((num, numIndex) => Math.random() > 0.5 ? /* @__PURE__ */ jsx(
    motion$1.li,
    {
      animate: { x: [0, 1.5, 0] },
      transition: {
        duration: 2,
        ease: ["easeIn", "easeOut"],
        repeat: Infinity,
        times: [0, 1]
      },
      className: "text-md md:text-2xl p-1 md:p-3 duration-700 hover:scale-170 hover:-translate-y-1",
      children: num
    },
    numIndex
  ) : /* @__PURE__ */ jsx(
    "li",
    {
      className: "text-md md:text-2xl p-1 md:p-3 duration-700 hover:scale-170 hover:-translate-y-1",
      children: num
    },
    numIndex
  )) }, rowIndex));
  return /* @__PURE__ */ jsx("div", { className: "text-cyan-400 h-full w-full", children: content });
};
const Severed = () => {
  return /* @__PURE__ */ jsx(ScaryNumbers, {});
};
const severed = withComponentProps(Severed);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: severed
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BrjxmDe7.js", "imports": ["/assets/chunk-XJI4KG32-BXFEWMgV.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-KbLW1yO6.js", "imports": ["/assets/chunk-XJI4KG32-BXFEWMgV.js", "/assets/with-props-B3HCb01j.js"], "css": ["/assets/root-BFIojDIQ.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BLOBjGmh.js", "imports": ["/assets/with-props-B3HCb01j.js", "/assets/chunk-XJI4KG32-BXFEWMgV.js", "/assets/proxy-Sr-JIFJD.js", "/assets/proxy-DWhhDzRw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/gallery": { "id": "routes/gallery", "parentId": "root", "path": "gallery", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/gallery-BNtEcoRY.js", "imports": ["/assets/with-props-B3HCb01j.js", "/assets/chunk-XJI4KG32-BXFEWMgV.js", "/assets/proxy-Sr-JIFJD.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/projects-CREuBG6d.js", "imports": ["/assets/with-props-B3HCb01j.js", "/assets/chunk-XJI4KG32-BXFEWMgV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/severed": { "id": "routes/severed", "parentId": "root", "path": "severed", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/severed-BTPP14as.js", "imports": ["/assets/with-props-B3HCb01j.js", "/assets/chunk-XJI4KG32-BXFEWMgV.js", "/assets/proxy-DWhhDzRw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-f34114a7.js", "version": "f34114a7" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/gallery": {
    id: "routes/gallery",
    parentId: "root",
    path: "gallery",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/severed": {
    id: "routes/severed",
    parentId: "root",
    path: "severed",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
