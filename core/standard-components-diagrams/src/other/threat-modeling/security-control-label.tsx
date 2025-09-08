import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURITY_CONTROL_LABEL = {
  _style: {
    entity:
      'text;html=1;strokeColor=#82b366;fillColor=#d5e8d4;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _original_width: 30,
  _original_height: 20,
}

export function SecurityControlLabel(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_CONTROL_LABEL}
      {...props}
      _style={extendStyle(SECURITY_CONTROL_LABEL, props)}
    />
  )
}
