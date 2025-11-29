import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCKED = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.locked;',
  },
  _width: 24,
  _height: 30,
}

export function Locked(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCKED)} />
}
