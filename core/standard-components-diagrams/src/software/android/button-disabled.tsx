import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_DISABLED = {
  _style:
    'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#333333;align=center;strokeColor=#333333;fontColor=#666666;',
  _width: 105.5,
  _height: 16.88,
}

export function ButtonDisabled(props: DiagramNodeProps) {
  return <Shape {...BUTTON_DISABLED} {...props} />
}
