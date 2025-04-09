/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rg8G6f4QFG3W3z3RUnscYT
// Component: s9gQxdudYD8z

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

import LinkButton from "../../LinkButton"; // plasmic-import: q9SS4LP6WSCA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rg8G6f4QFG3W3z3RUnscYT/projectcss
import sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: s9gQxdudYD8z/css

import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: _Prph_czUutx/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: K9JVqS6VwzDC/icon

createPlasmicElementProxy;

export type PlasmicProductCarousel__VariantMembers = {
  slider: "first" | "second" | "third";
};
export type PlasmicProductCarousel__VariantsArgs = {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
};
type VariantPropType = keyof PlasmicProductCarousel__VariantsArgs;
export const PlasmicProductCarousel__VariantProps = new Array<VariantPropType>(
  "slider"
);

export type PlasmicProductCarousel__ArgsType = {};
type ArgPropType = keyof PlasmicProductCarousel__ArgsType;
export const PlasmicProductCarousel__ArgProps = new Array<ArgPropType>();

export type PlasmicProductCarousel__OverridesType = {
  root?: Flex__<"div">;
  linkButton?: Flex__<typeof LinkButton>;
};

export interface DefaultProductCarouselProps {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductCarousel__RenderFunc(props: {
  variants: PlasmicProductCarousel__VariantsArgs;
  args: PlasmicProductCarousel__ArgsType;
  overrides: PlasmicProductCarousel__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "slider",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.slider
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
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
      <div className={classNames(projectcss.all, sty.freeBox__qUi7H)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mWdk6, {
            [sty.freeBoxslider_second__mWdk6BylG1]: hasVariant(
              $state,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5KQ8X
            )}
          >
            {"Great Design Collection"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iZwG6,
              {
                [sty.textslider_first__iZwG6SqlYn]: hasVariant(
                  $state,
                  "slider",
                  "first"
                ),
                [sty.textslider_second__iZwG6BylG1]: hasVariant(
                  $state,
                  "slider",
                  "second"
                ),
                [sty.textslider_third__iZwG67CoXm]: hasVariant(
                  $state,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant($state, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant($state, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vGnEs
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jbEbu)}
          >
            <LinkButton
              data-plasmic-name={"linkButton"}
              data-plasmic-override={overrides.linkButton}
              className={classNames("__wab_instance", sty.linkButton)}
              text={"\u2295 Add to cart"}
              type={"solidOrange"}
            />
          </Stack__>
        </Stack__>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rAd7A)}
      >
        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "slider", "third")
              ? CircleOIcon
              : hasVariant($state, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__hhrNu, {
            [sty.svgslider_second__hhrNuBylG1]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__hhrNu7CoXm]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__vipJj, {
            [sty.svgslider_first__vipJjsqlYn]: hasVariant(
              $state,
              "slider",
              "first"
            ),
            [sty.svgslider_second__vipJjBylG1]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__vipJj7CoXm]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <PlasmicIcon__
          PlasmicIconType={
            hasVariant($state, "slider", "third") ? DotCircleOIcon : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__qOwh, {
            [sty.svgslider_third__qOwh7CoXm]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  linkButton: typeof LinkButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCarousel__VariantsArgs;
    args?: PlasmicProductCarousel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCarousel__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProductCarousel__ArgProps,
          internalVariantPropNames: PlasmicProductCarousel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),

    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
