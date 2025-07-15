import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=network',
  _width: 100,
  _height: 75,
}

export function Network(props: DiagramNodeProps) {
  return <Shape {...NETWORK} {...props} />
}
