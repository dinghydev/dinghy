import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHIP_WITH_TEXT_AND_ICON = {
  _style: {
    entity:
      'shape=rect;arcSize=50;strokeColor=none;fillColor=#eeeeee;rounded=1;spacingLeft=24;fontSize=13;align=center;whiteSpace=wrap;html=1;',
  },
  _original_width: 170,
  _original_height: 32,
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
