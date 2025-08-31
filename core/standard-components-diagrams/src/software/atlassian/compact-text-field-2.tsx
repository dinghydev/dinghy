import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPACT_TEXT_FIELD_2 = {
  _style:
    'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontColor=#596780;fontSize=12',
  _width: 1,
  _height: 58,
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
