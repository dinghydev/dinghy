import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEAM_FOUNDATION_SERVICE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.team_foundation_service;',
  _width: 50,
  _height: 37.5,
}

export function TeamFoundationService(props: DiagramNodeProps) {
  return <Shape {...TEAM_FOUNDATION_SERVICE} {...props} />
}
