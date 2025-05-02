import type { NodeTree, Props } from '@reactiac/base-components'
import { DiagramNodeSchema } from '@reactiac/base-components'
import { mergician } from 'mergician'
import type {
  DrawioContext,
  DrawioNodeProps,
  DrawioNodeTree,
  DrawioProps,
  DrawioRenderOptions,
} from '../types.ts'
import { handleAttributes } from '../attribute-handler/index.ts'

const defaultDiagramOptions: Props = {
  flags: {
    isDirectionVertical: false,
  },
  element: {
    id: (node: NodeTree) => node._props._id,
    parent: (node: NodeTree) => node._parent!._props._id,
    value: (node: NodeTree) => node._props._title,
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

const defaultDependencyProps: Props = {
  dependency: {
    id: (node: NodeTree) => node._props._id,
    source: (node: DrawioNodeTree) => (node._props! as any)._source._props._id,
    target: (node: DrawioNodeTree) => (node._props! as any)._target._props._id,
    parent: 'root',
    edge: 1,
    style: {
      edgeStyle: 'orthogonalEdgeStyle',
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
  const drawioConfig = DiagramNodeSchema.parse(_props)

  const configs: Props[] = []
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

  if (configs.length === 1) {
    configs.push({})
  }
  _props._diagram = mergician(...configs) as DrawioProps

  _props._node._children.map((c: DrawioNodeTree) => resolve(c._props, options))
}

export const p15ResolveAttrDiagram = ({
  rootNode,
  renderOptions,
}: DrawioContext) => {
  resolve(rootNode._props, renderOptions)
}
