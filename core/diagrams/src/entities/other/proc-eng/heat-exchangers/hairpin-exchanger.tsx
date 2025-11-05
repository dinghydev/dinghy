import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HAIRPIN_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.hairpin_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 91,
  _height: 30,
}

export function HairpinExchanger(props: NodeProps) {
  return (
    <Shape
      {...HAIRPIN_EXCHANGER}
      {...props}
      _style={extendStyle(HAIRPIN_EXCHANGER, props)}
    />
  )
}
