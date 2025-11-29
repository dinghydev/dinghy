import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPACT_TEXT_FIELD = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontSize=12',
  },
  _width: 1,
  _height: 58,
}

export function CompactTextField(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPACT_TEXT_FIELD)} />
}
