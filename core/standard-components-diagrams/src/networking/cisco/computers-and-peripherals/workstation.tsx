import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.workstation;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 83,
  _height: 62,
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
