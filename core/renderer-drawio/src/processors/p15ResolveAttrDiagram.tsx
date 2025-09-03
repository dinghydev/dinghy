import * as base from '@diac/base-components'
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
    style: {
      rounded: 1,
      whiteSpace: 'wrap',
      verticalAlign: 'middle',
      align: 'center',
    },
  },
  group: {
    style: {
      verticalAlign: 'top',
      aspect: 'fixed',
      align: 'center',
      spacingLeft: 5,
      spacingRight: 5,
      spacingBottom: 5,
    },
  },
  geometry: {
    as: 'geometry',
  },
  dimension: {
    boxWidth: 60,
    boxHeight: 60,
    textHeight: 20,
    padding: {
      top: 15,
      bottom: 15,
      left: 15,
      right: 15,
    },
    margin: {
      top: 15,
      bottom: 15,
      left: 15,
      right: 15,
    },
  },
}

const defaultDependencyProps: base.Props = {
  dependency: {
    id: (node: base.NodeTree) => node._props._id,
    source: (node: DrawioNodeTree) =>
      (node._props! as any)._source?._props?._id,
    target: (node: DrawioNodeTree) =>
      (node._props! as any)._target?._props?._id,
    parent: 'root',
    edge: 1,
    style: {},
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
