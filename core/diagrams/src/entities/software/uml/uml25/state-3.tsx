import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATE_3 = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=top;rounded=1;absoluteArcSize=1;arcSize=10;dashed=0;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 40,
}

export function State3(props: NodeProps) {
  return <Shape {...STATE_3} {...props} _style={extendStyle(STATE_3, props)} />
}
