import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_SERVICE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=serv;archiType=rounded',
  _width: 150,
  _height: 75,
}

export function ApplicationService(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_SERVICE} {...props} />
}
