import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_PRIMARY = {
  _style:
    'rounded=1;fillColor=#0057D8;align=center;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#ffffff;fontSize=12;sketch=0;',
  _width: 0,
  _height: 33,
}

export function ButtonPrimary(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_PRIMARY}
      {...props}
      _style={extendStyle(BUTTON_PRIMARY, props)}
    />
  )
}
