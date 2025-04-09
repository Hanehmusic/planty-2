/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rg8G6f4QFG3W3z3RUnscYT
// Component: 2e2CBkmAhbqe

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
import IconLink from "../../IconLink"; // plasmic-import: o0TTiI6CFlrz/component

import { useScreenVariants as useScreenVariantsz8CdmF0UmUv8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: z8cdmF0UmUv8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rg8G6f4QFG3W3z3RUnscYT/projectcss
import sty from "./PlasmicHeader3.module.css"; // plasmic-import: 2e2CBkmAhbqe/css

import LogoWhiteSvgIcon from "./icons/PlasmicIcon__LogoWhiteSvg"; // plasmic-import: X-flMK2U-MaR/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: aFnkt02yb9N_/icon

createPlasmicElementProxy;

export type PlasmicHeader3__VariantMembers = {};
export type PlasmicHeader3__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader3__VariantsArgs;
export const PlasmicHeader3__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader3__ArgsType = {};
type ArgPropType = keyof PlasmicHeader3__ArgsType;
export const PlasmicHeader3__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader3__OverridesType = {
  root?: Flex__<"div">;
  menuButton?: Flex__<typeof MenuButton>;
  iconLink?: Flex__<typeof IconLink>;
  text?: Flex__<"div">;
};

export interface DefaultHeader3Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader3__RenderFunc(props: {
  variants: PlasmicHeader3__VariantsArgs;
  args: PlasmicHeader3__ArgsType;
  overrides: PlasmicHeader3__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <MenuButton
        data-plasmic-name={"menuButton"}
        data-plasmic-override={overrides.menuButton}
        className={classNames("__wab_instance", sty.menuButton)}
      />

      <LogoWhiteSvgIcon
        className={classNames(projectcss.all, sty.svg__aoPHn)}
        role={"img"}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fz14I)}
      >
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__g8C7B
          )}
          component={Link}
          href={`/store`}
          platform={"nextjs"}
        >
          {"Store"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__nzBxk
          )}
          component={Link}
          href={`/about`}
          platform={"nextjs"}
        >
          {"About"}
        </PlasmicLink__>
        <PlasmicLink__
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link__laHDp
          )}
          component={Link}
          href={`/faq`}
          platform={"nextjs"}
        >
          {hasVariant(globalVariants, "screen", "mobile") ? "Faq" : "Faq"}
        </PlasmicLink__>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___2IpuF)}
      >
        <IconLink
          data-plasmic-name={"iconLink"}
          data-plasmic-override={overrides.iconLink}
          className={classNames("__wab_instance", sty.iconLink)}
          icon={
            <React.Fragment>
              <IconIcon
                className={classNames(projectcss.all, sty.svg__cHfB)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"0"}
              </div>
            </React.Fragment>
          }
        />
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuButton: typeof MenuButton;
  iconLink: typeof IconLink;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader3__VariantsArgs;
    args?: PlasmicHeader3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader3__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeader3__ArgProps,
          internalVariantPropNames: PlasmicHeader3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader3";
  } else {
    func.displayName = `PlasmicHeader3.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader3 = Object.assign(
  // Top-level PlasmicHeader3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHeader3
    internalVariantProps: PlasmicHeader3__VariantProps,
    internalArgProps: PlasmicHeader3__ArgProps
  }
);

export default PlasmicHeader3;
/* prettier-ignore-end */
