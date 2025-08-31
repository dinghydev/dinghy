import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUILDING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.building;',
  },
  _width: 63.2,
  _height: 55.2,
}

export function Building(props: DiagramNodeProps) {
  return (
    <Shape {...BUILDING} {...props} _style={extendStyle(BUILDING, props)} />
  )
}
