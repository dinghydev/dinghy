import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROTOCOL_4 = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#07838f;fillColor=#dafdf5;fontColor=#266f3a;strokeWidth=1.5;',
  },
  _width: 125,
  _height: 16,
}

export function Protocol4(props: NodeProps) {
  return (
    <Shape {...PROTOCOL_4} {...props} _style={extendStyle(PROTOCOL_4, props)} />
  )
}
