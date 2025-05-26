import * as base from '@reactiac/base-components'
import type {
  DrawioContext,
  DrawioNodeProps,
  DrawioNodeTree,
  DrawioProps,
  DrawioRenderOptions,
} from '../types.ts'
import { handleAttributes } from '../attribute-handler/index.ts'

const defaultDiagramOptions: base.Props = {
  flags: {
    isDirectionVertical: false,
  },
  element: {
    id: (node: base.NodeTree) => node._props._id,
    parent: (node: base.NodeTree) => node._parent!._props._id,
    value: (node: base.NodeTree) => node._props._title,
    vertex: 1,
    style: {},
  },
  entity: {
    style: {},
  },
  group: {
    style: {
      verticalAlign: 'top',
      aspect: 'fixed',
    },
  },
  geometry: {
    as: 'geometry',
  },
  dimension: {
    boxWidth: 60,
    boxHeight: 60,
    textHeight: 10,
    spaceX: 30,
    spaceY: 30,
    spaceBetweenX: 30,
    spaceBetweenY: 30,
  },
}

const defaultDependencyProps: base.Props = {
  dependency: {
    id: (node: base.NodeTree) => node._props._id,
    source: (node: DrawioNodeTree) => (node._props! as any)._source._props._id,
    target: (node: DrawioNodeTree) => (node._props! as any)._target._props._id,
    parent: 'root',
    edge: 1,
    style: {
      rounded: 1,
      orthogonalLoop: 1,
      jettySize: 'auto',
      html: 1,
    },
  },
  geometry: {
    relative: 1,
    as: 'geometry',
  },
  dimension: {
    arrowSpace: 10,
  },
}

function resolve(_props: DrawioNodeProps, options: DrawioRenderOptions) {
  const drawioConfig = base.DiagramNodeSchema.parse(_props)

  const configs: base.Props[] = []
  if (_props._isDependency) {
    configs.push(defaultDependencyProps)
  } else {
    configs.push(defaultDiagramOptions)
    if (options.diagramOptions) {
      configs.push(options.diagramOptions)
    }
  }

  handleAttributes(drawioConfig, configs, options)
  if (drawioConfig._diagram) {
    configs.push(drawioConfig._diagram)
  }
  _props._diagram = {} as DrawioProps
  configs.map((c) => base.deepMerge(_props._diagram, c))

  _props._node._children.map((c: DrawioNodeTree) => resolve(c._props, options))
}

export const p15ResolveAttrDiagram = ({
  rootNode,
  renderOptions,
}: DrawioContext) => {
  resolve(rootNode._props, renderOptions)
}
