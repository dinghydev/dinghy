import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESPONSE_GROUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.response_group;',
  _width: 58,
  _height: 54,
}

export function ResponseGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESPONSE_GROUP}
      {...props}
      _style={extendStyle(RESPONSE_GROUP, props)}
    />
  )
}
