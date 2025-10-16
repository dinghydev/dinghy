import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSPORTATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.transportation;',
  },
  _width: 55.2,
  _height: 38.4,
}

export function Transportation(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSPORTATION}
      {...props}
      _style={extendStyle(TRANSPORTATION, props)}
    />
  )
}
