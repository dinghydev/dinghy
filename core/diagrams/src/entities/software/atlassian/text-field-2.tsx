import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_FIELD_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;align=left;spacingLeft=5;strokeColor=#4C9AFF;html=1;strokeWidth=2;fontSize=12',
  },
  _width: 1,
  _height: 58,
}

export function TextField2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEXT_FIELD_2)} />
}
