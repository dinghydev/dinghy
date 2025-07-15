import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPACT_TEXT_FIELD = {
  _style:
    'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontSize=12',
  _width: 1,
  _height: 58,
}

export function CompactTextField(props: DiagramNodeProps) {
  return <Shape {...COMPACT_TEXT_FIELD} {...props} />
}
