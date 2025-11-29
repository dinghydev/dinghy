import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY_CONTROL_LABEL = {
  _style: {
    entity:
      'text;html=1;strokeColor=#82b366;fillColor=#d5e8d4;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _width: 30,
  _height: 20,
}

export function SecurityControlLabel(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SECURITY_CONTROL_LABEL)} />
  )
}
