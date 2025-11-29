import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_PROTOCOL_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#475f75;strokeWidth=1.5;',
  },
  _width: 1,
  _height: 16,
}

export function GenericProtocol2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GENERIC_PROTOCOL_2)} />
}
