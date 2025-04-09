/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rg8G6f4QFG3W3z3RUnscYT
// Component: KVsYSp7enKIc

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import MenuButton from "../../MenuButton"; // plasmic-import: mayIk_3OkhFT/component

import { useScreenVariants as useScreenVariantsz8CdmF0UmUv8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: z8cdmF0UmUv8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rg8G6f4QFG3W3z3RUnscYT/projectcss
import sty from "./PlasmicFaqFooter.module.css"; // plasmic-import: KVsYSp7enKIc/css

import LocationSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__LocationSvgrepoCom1Svg"; // plasmic-import: B-h2CqI455Bf/icon
import LogoWhiteSvgIcon from "./icons/PlasmicIcon__LogoWhiteSvg"; // plasmic-import: X-flMK2U-MaR/icon

createPlasmicElementProxy;

export type PlasmicFaqFooter__VariantMembers = {};
export type PlasmicFaqFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFaqFooter__VariantsArgs;
export const PlasmicFaqFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFaqFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFaqFooter__ArgsType;
export const PlasmicFaqFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFaqFooter__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h1?: Flex__<"h1">;
  menuButton?: Flex__<typeof MenuButton>;
};

export interface DefaultFaqFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFaqFooter__RenderFunc(props: {
  variants: PlasmicFaqFooter__VariantsArgs;
  args: PlasmicFaqFooter__ArgsType;
  overrides: PlasmicFaqFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsz8CdmF0UmUv8()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__x1Apa)}>
        <div className={classNames(projectcss.all, sty.columns__go8W)}>
          <div className={classNames(projectcss.all, sty.column__hYfaA)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"562px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"947px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/planty/images/promoWebp.webp",
                fullWidth: 720,
                fullHeight: 525,
                aspectRatio: undefined
              }}
            />
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__lRnwc)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Behold our FAQ"
                : "Still have questions?\nContact us. "}
            </h1>
            <div className={classNames(projectcss.all, sty.columns__yJt9R)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__qkkfz)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cSoNz
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Behold our FAQ"
                    : "226 rue St-Joseph E, \nQu\u00e9bec, QC, Canada, \nG1K 3A9"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jxC
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Behold our FAQ"
                    : "+1-202-555-0112"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__iimQr)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7Fo
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Behold our FAQ"
                    : "geeks@snipcart.com"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__jbg07)}>
                  <Stack__
                    as={PlasmicLink__}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__j8YJ
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <LocationSvgrepoCom1SvgIcon
                      className={classNames(projectcss.all, sty.svg___15Xw0)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gSsbs
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Discover"
                        : "On the map"}
                    </div>
                  </Stack__>
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.column__uYzHw)} />
            </div>
          </Stack__>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__kKfzt)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6Drwn)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fPnm3)}
          >
            <MenuButton
              data-plasmic-name={"menuButton"}
              data-plasmic-override={overrides.menuButton}
              className={classNames("__wab_instance", sty.menuButton)}
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__iNany)}
            >
              <LogoWhiteSvgIcon
                className={classNames(projectcss.all, sty.svg__ptd2)}
                role={"img"}
              />

              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__pzRuh
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                {"Store"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__efnaX
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                {"About"}
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__uaq3U
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                {"Faq"}
              </PlasmicLink__>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox___5GS18)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hPuiI
                )}
              >
                {
                  "\u00a9 Company. All rights reserved. This site proudly built with "
                }
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gxyR7
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"Plasmic"}
              </PlasmicLink__>
            </div>
          </Stack__>
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "menuButton"],
  img: ["img"],
  h1: ["h1"],
  menuButton: ["menuButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  h1: "h1";
  menuButton: typeof MenuButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaqFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaqFooter__VariantsArgs;
    args?: PlasmicFaqFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaqFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFaqFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFaqFooter__ArgProps,
          internalVariantPropNames: PlasmicFaqFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFaqFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaqFooter";
  } else {
    func.displayName = `PlasmicFaqFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFaqFooter = Object.assign(
  // Top-level PlasmicFaqFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    menuButton: makeNodeComponent("menuButton"),

    // Metadata about props expected for PlasmicFaqFooter
    internalVariantProps: PlasmicFaqFooter__VariantProps,
    internalArgProps: PlasmicFaqFooter__ArgProps
  }
);

export default PlasmicFaqFooter;
/* prettier-ignore-end */
