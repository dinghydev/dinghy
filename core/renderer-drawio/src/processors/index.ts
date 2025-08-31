import type { ReactElement } from 'react'
import type {
  DrawioContext,
  DrawioNodeTree,
  DrawioRenderOptions,
  Processor,
} from '../types.ts'
import { p10ApplyViewAttributes } from './p10ApplyViewAttributes.tsx'
import { p15ResolveAttrDiagram } from './p15ResolveAttrDiagram.tsx'
import { p16CollectDependencies } from './p16CollectDependencies.ts'
import { p22FilterView } from './p22FilterView.ts'
import { p23ApplyFlagHidden } from './p23ApplyFlagHidden.ts'
import { p88BuildMxfile } from './p88BuildMxfile.ts'
import { p21ResolveFlagIsEntity } from './p21ResolveFlagIsEntity.tsx'
import { p82GenerateShapes } from './p82GenerateShapes.tsx'
import { p31ResolveDimension } from './p31ResolveDimension.ts'
import { p65AlignDependencies } from './p65AlignDependencies.ts'
import { p86GenerateRelationships } from './p86GenerateRelationships.tsx'
import { p30CollectShapeAttr } from './p30CollectShapeAttr.ts'
import { p32ApplyDistribution } from './p32ApplyDistribution.ts'
import { p68AdjustRelationships } from './p68AdjustRelationships.ts'
import { p61ConsolidateDependencies } from './p61ConsolidateDependencies.ts'
import { p80ApplyBeforeGenerate } from './p80ApplyBeforeGenerate.tsx'
import type { HostContainer } from '@diac/base-renderer'
const processors: Processor[] = [
  p10ApplyViewAttributes,
  p15ResolveAttrDiagram,
  p16CollectDependencies,
  p21ResolveFlagIsEntity,
  p22FilterView,
  p23ApplyFlagHidden,
  p30CollectShapeAttr,
  p31ResolveDimension,
  p32ApplyDistribution,
  p61ConsolidateDependencies,
  p65AlignDependencies,
  p68AdjustRelationships,
  p80ApplyBeforeGenerate,
  p82GenerateShapes,
  p86GenerateRelationships,
  p88BuildMxfile,
]

export function applyProcessors(
  container: HostContainer<string, DrawioRenderOptions>,
) {
  const rootNode = (container.rootElement!.props as any)._node as DrawioNodeTree
  const context: DrawioContext = {
    rootNode,
    renderOptions: container.renderOptions,
    dependencies: [],
    rootElements: [],
    mxfileElement: null as unknown as ReactElement,
    dependsPairs: [],
  }
  processors.map((processor) => processor(context))
  return context.mxfileElement
}
