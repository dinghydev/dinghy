import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESPONSE_GROUP_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.response_group_service;',
  },
  _original_width: 58,
  _original_height: 54,
}

export function ResponseGroupService(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESPONSE_GROUP_SERVICE}
      {...props}
      _style={extendStyle(RESPONSE_GROUP_SERVICE, props)}
    />
  )
}
