import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAGNETORESISTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.magnetoresistor;',
  },
  _width: 100,
  _height: 60,
}

export function Magnetoresistor(props: NodeProps) {
  return (
    <Shape
      {...MAGNETORESISTOR}
      {...props}
      _style={extendStyle(MAGNETORESISTOR, props)}
    />
  )
}
