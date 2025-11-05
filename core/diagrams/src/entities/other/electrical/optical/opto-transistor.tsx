import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTO_TRANSISTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.opto-transistor;',
  },
  _width: 100,
  _height: 110,
}

export function OptoTransistor(props: NodeProps) {
  return (
    <Shape
      {...OPTO_TRANSISTOR}
      {...props}
      _style={extendStyle(OPTO_TRANSISTOR, props)}
    />
  )
}
