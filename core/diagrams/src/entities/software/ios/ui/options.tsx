import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTIONS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.options;fillColor=#222222;sketch=0;',
  },
  _width: 12,
  _height: 6,
}

export function Options(props: NodeProps) {
  return <Shape {...OPTIONS} {...props} _style={extendStyle(OPTIONS, props)} />
}
