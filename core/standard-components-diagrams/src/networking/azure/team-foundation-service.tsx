import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEAM_FOUNDATION_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.team_foundation_service;',
  },
  _width: 50,
  _height: 37.5,
}

export function TeamFoundationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEAM_FOUNDATION_SERVICE}
      {...props}
      _style={extendStyle(TEAM_FOUNDATION_SERVICE, props)}
    />
  )
}
