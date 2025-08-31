import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTLOOK_USER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.outlook_user;',
  },
  _width: 63,
  _height: 55,
}

export function OutlookUser(props: DiagramNodeProps) {
  return (
    <Shape
      {...OUTLOOK_USER}
      {...props}
      _style={extendStyle(OUTLOOK_USER, props)}
    />
  )
}
