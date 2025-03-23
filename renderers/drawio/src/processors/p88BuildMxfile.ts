import { ReactElement } from 'react'
import type { DrawioContext, DrawioNodeTree } from '../types.js'
import type { Props } from '@reactiac/base-components'

const defaultMxfile = (_node: DrawioNodeTree) => ({
  type: 'mxfile',
  props: {
    host: 'Electron',
    agent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/25.0.2 Chrome/128.0.6613.186 Electron/32.2.5 Safari/537.36',
    version: '25.0.2',
    children: [] as Props[],
    _node: _node,
  },
})
const defaultDiagram = (node: DrawioNodeTree) => ({
  type: 'diagram',
  props: {
    name: node._props._name,
    children: [] as Props[],
  },
})

const defaultMxGraphModel = (_node: DrawioNodeTree) => ({
  type: 'mxGraphModel',
  props: {
    children: [] as Props[],
    grid: 1,
    gridSize: 10,
    guides: 1,
    tooltips: 1,
    connect: 1,
    arrows: 1,
    fold: 1,
    page: 1,
    pageScale: 1,
    pageWidth: 1,
    pageHeight: 1,
    math: 0,
    shadow: 0,
  },
})

const defaultRoot = (_node: DrawioNodeTree) => ({
  type: 'root',
  props: {
    children: [
      {
        type: 'mxCell',
        props: {
          id: 'page',
        },
      },
      {
        type: 'mxCell',
        props: {
          id: 'root',
          parent: 'page',
        },
      },
    ],
  },
})

export const p88BuildMxfile = (context: DrawioContext) => {
  const root = defaultRoot(context.rootNode)
  root.props.children.push(...context.rootElements as any)
  const mxGraphModel = defaultMxGraphModel(context.rootNode)
  mxGraphModel.props.children.push(root)
  const diagram = defaultDiagram(context.rootNode)
  diagram.props.children.push(mxGraphModel)
  const mxfile = defaultMxfile(context.rootNode)
  mxfile.props.children.push(diagram)
  context.mxfileElement = mxfile as unknown as ReactElement
}
