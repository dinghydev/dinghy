import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RELOAD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.reload;',
  },
  _width: 24,
  _height: 27,
}

export function Reload(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RELOAD)} />
}
