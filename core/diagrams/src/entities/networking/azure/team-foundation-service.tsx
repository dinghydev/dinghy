import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEAM_FOUNDATION_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.team_foundation_service;',
  },
  _width: 50,
  _height: 37.5,
}

export function TeamFoundationService(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, TEAM_FOUNDATION_SERVICE)} />
  )
}
