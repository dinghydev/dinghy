import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMUNICATIONS_PATH = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=commPath',
  _width: 100,
  _height: 75,
}

export function CommunicationsPath(props: DiagramNodeProps) {
  return <Shape {...COMMUNICATIONS_PATH} {...props} />
}
