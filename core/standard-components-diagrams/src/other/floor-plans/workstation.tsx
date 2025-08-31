import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.workstation;',
  },
  _width: 50,
  _height: 40,
}

export function Workstation(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSTATION}
      {...props}
      _style={extendStyle(WORKSTATION, props)}
    />
  )
}
