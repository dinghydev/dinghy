import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_SEQUENCE = {
  _style: {
    entity:
      'curved=1;endArrow=block;html=1;strokeColor=#1CCF00;strokeWidth=2;endSize=3;rounded=0;',
  },
  _width: 60,
  _height: 24,
}

export function MessageSequence(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_SEQUENCE)} />
}
