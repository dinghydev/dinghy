import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTIVITY_PARTITION_2 = {
  _style: {
    entity:
      'shape=rect;html=1;rounded=1;strokeWidth=2;verticalAlign=top;whiteSpace=wrap;align=center;',
  },
  _width: 140,
  _height: 50,
}

export function ActivityPartition2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTIVITY_PARTITION_2)} />
}
