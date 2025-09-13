import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_PRIMARY = {
  _style: {
    entity:
      'rounded=1;fillColor=#0057D8;align=center;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#ffffff;fontSize=12;sketch=0;',
  },
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
