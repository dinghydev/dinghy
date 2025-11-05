import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAG = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bag;',
  },
  _original_width: 21,
  _original_height: 21,
}

export function Bag(props: NodeProps) {
  return <Shape {...BAG} {...props} _style={extendStyle(BAG, props)} />
}
