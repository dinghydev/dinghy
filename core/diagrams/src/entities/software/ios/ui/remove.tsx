import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOVE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.remove;fillColor=#0080f0;strokeColor=#ffffff;sketch=0;',
  },
  _width: 16,
  _height: 12,
}

export function Remove(props: NodeProps) {
  return <Shape {...REMOVE} {...props} _style={extendStyle(REMOVE, props)} />
}
