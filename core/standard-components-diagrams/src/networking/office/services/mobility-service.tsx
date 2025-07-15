import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILITY_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.mobility_service;',
  _width: 45,
  _height: 53,
}

export function MobilityService(props: DiagramNodeProps) {
  return <Shape {...MOBILITY_SERVICE} {...props} />
}
