import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATE_6 = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;rounded=1;absoluteArcSize=1;arcSize=10;dashed=1;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 40,
}

export function State6(props: NodeProps) {
  return <Shape {...STATE_6} {...props} _style={extendStyle(STATE_6, props)} />
}
