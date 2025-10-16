import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHIP_WITH_TEXT_AND_ICON = {
  _style: {
    entity:
      'shape=rect;arcSize=50;strokeColor=none;fillColor=#eeeeee;rounded=1;spacingLeft=24;fontSize=13;align=center;whiteSpace=wrap;html=1;',
  },
  _width: 170,
  _height: 32,
}

export function ChipWithTextAndIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHIP_WITH_TEXT_AND_ICON}
      {...props}
      _style={extendStyle(CHIP_WITH_TEXT_AND_ICON, props)}
    />
  )
}
