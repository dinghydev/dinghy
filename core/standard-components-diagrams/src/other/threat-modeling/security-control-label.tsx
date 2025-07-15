import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_CONTROL_LABEL = {
  _style:
    'text;html=1;strokeColor=#82b366;fillColor=#d5e8d4;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  _width: 30,
  _height: 20,
}

export function SecurityControlLabel(props: DiagramNodeProps) {
  return <Shape {...SECURITY_CONTROL_LABEL} {...props} />
}
