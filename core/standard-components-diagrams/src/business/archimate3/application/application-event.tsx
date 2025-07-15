import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_EVENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=event;archiType=rounded',
  _width: 150,
  _height: 75,
}

export function ApplicationEvent(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_EVENT} {...props} />
}
