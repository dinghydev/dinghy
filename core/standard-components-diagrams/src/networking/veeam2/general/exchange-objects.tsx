import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXCHANGE_OBJECTS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.exchange_objects;',
  },
  _width: 28.000000000000004,
  _height: 28.000000000000004,
}

export function ExchangeObjects(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_OBJECTS}
      {...props}
      _style={extendStyle(EXCHANGE_OBJECTS, props)}
    />
  )
}
