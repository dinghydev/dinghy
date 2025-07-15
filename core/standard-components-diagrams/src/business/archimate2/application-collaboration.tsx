import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_COLLABORATION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=collab',
  _width: 100,
  _height: 75,
}

export function ApplicationCollaboration(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_COLLABORATION} {...props} />
}
