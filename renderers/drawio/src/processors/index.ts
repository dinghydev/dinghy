import type { ReactElement } from 'react'
import type {
  DrawioContext,
  DrawioNodeTree,
  DrawioRenderOptions,
  Processor,
} from '../types.js'
import { p16CollectDependencies } from './p16CollectDependencies.js'
import { p23ApplyFlagHidden } from './p23ApplyFlagHidden.js'
import { p88BuildMxfile } from './p88BuildMxfile.js'
import { p15ResolveAttrDiagram } from './p15ResolveAttrDiagram.js'
import { p21ResolveFlagIsEntity } from './p21ResolveFlagIsEntity.js'
import { p82GenerateShapes } from './p82GenerateShapes.js'
import { p31ResolveDimension } from './p31ResolveDimension.js'
import { p65AlignDependencies } from './p65AlignDependencies.js'
import { p86GenerateRelationships } from './p86GenerateRelationships.js'
import { p30CollectShapeAttr } from './p30CollectShapeAttr.js'
import { p32ApplyDistribution } from './p32ApplyDistribution.js'
import { p68AdjustRelationships } from './p68AdjustRelationships.js'
import { p61CollectDependencies } from './p61CollectDependencies.js'
import { p80ApplyBeforeGenerate } from './p80ApplyBeforeGenerate.js'
import type { HostContainer } from '@reactiac/base-renderer'

const processors: Processor[] = [
  p15ResolveAttrDiagram,
  p16CollectDependencies,
  p21ResolveFlagIsEntity,
  p23ApplyFlagHidden,
  p30CollectShapeAttr,
  p31ResolveDimension,
  p32ApplyDistribution,
  p61CollectDependencies,
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
