import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADMINISTRATOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.administrator;',
  },
  _original_width: 58,
  _original_height: 56,
}

export function Administrator(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADMINISTRATOR}
      {...props}
      _style={extendStyle(ADMINISTRATOR, props)}
    />
  )
}
