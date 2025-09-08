import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPACT_TEXT_FIELD_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontColor=#596780;fontSize=12',
  },
  _original_width: 1,
  _original_height: 58,
}

export function CompactTextField2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPACT_TEXT_FIELD_2}
      {...props}
      _style={extendStyle(COMPACT_TEXT_FIELD_2, props)}
    />
  )
}
