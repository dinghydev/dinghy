import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_MINI = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.ipad_mini;',
  _width: 33,
  _height: 47,
}

export function IpadMini(props: DiagramNodeProps) {
  return (
    <Shape {...IPAD_MINI} {...props} _style={extendStyle(IPAD_MINI, props)} />
  )
}
