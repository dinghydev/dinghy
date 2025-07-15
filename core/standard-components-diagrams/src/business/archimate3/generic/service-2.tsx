import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.service;',
  _width: 60,
  _height: 35,
}

export function Service2(props: DiagramNodeProps) {
  return <Shape {...SERVICE_2} {...props} />
}
