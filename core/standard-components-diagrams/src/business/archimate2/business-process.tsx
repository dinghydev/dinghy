import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_PROCESS = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=process',
  _width: 100,
  _height: 75,
}

export function BusinessProcess(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_PROCESS} {...props} />
}
