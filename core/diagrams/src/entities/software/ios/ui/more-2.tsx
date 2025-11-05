import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MORE_2 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.more_2;strokeColor=#a0a0a0;',
  },
  _width: 6,
  _height: 8,
}

export function More2(props: NodeProps) {
  return <Shape {...MORE_2} {...props} _style={extendStyle(MORE_2, props)} />
}
