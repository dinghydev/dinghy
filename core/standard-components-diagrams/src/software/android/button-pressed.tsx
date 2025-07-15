import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_PRESSED = {
  _style:
    'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#999999;align=center;strokeColor=#666666;fontColor=#ffffff;strokeWidth=2;',
  _width: 105.5,
  _height: 16.88,
}

export function ButtonPressed(props: DiagramNodeProps) {
  return <Shape {...BUTTON_PRESSED} {...props} />
}
