import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MORE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.more;strokeColor=#a0a0a0;',
  },
  _width: 5,
  _height: 8,
}

export function More(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MORE)} />
}
