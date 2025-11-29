import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_PAD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.call_pad;sketch=0;',
  },
  _width: 140,
  _height: 160,
}

export function CallPad(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALL_PAD)} />
}
