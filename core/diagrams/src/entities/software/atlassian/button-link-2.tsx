import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_LINK_2 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontColor=#0057D8;align=center;verticalAlign=middle;fontStyle=0;fontSize=12',
  },
  _width: 86,
  _height: 33,
}

export function ButtonLink2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_LINK_2}
      {...props}
      _style={extendStyle(BUTTON_LINK_2, props)}
    />
  )
}
