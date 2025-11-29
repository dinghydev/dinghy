import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OSCILLOSCOPE = {
  _style: {
    entity:
      'perimeter=ellipsePerimeter;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.instruments.oscilloscope;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function Oscilloscope(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OSCILLOSCOPE)} />
}
