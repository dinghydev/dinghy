import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERFACE_2 = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#475f75;fillColor=default;strokeWidth=1.5;',
  },
  _width: 57,
  _height: 16,
}

export function Interface2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERFACE_2)} />
}
