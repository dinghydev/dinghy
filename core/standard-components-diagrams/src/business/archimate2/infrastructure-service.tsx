import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFRASTRUCTURE_SERVICE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.business;busType=service',
  _width: 100,
  _height: 75,
}

export function InfrastructureService(props: DiagramNodeProps) {
  return <Shape {...INFRASTRUCTURE_SERVICE} {...props} />
}
