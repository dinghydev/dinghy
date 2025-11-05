import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NUMBER_PAD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.number_pad;strokeWidth=1;',
  },
  _width: 140,
  _height: 160,
}

export function NumberPad(props: NodeProps) {
  return (
    <Shape {...NUMBER_PAD} {...props} _style={extendStyle(NUMBER_PAD, props)} />
  )
}
