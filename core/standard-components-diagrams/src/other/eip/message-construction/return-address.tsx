import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETURN_ADDRESS = {
  _style: {
    entity:
      'strokeWidth=3;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.retAddr;html=1;verticalLabelPosition=bottom;fillColor=#FFE040;verticalAlign=top;',
  },
  _width: 78,
  _height: 48,
}

export function ReturnAddress(props: DiagramNodeProps) {
  return (
    <Shape
      {...RETURN_ADDRESS}
      {...props}
      _style={extendStyle(RETURN_ADDRESS, props)}
    />
  )
}
