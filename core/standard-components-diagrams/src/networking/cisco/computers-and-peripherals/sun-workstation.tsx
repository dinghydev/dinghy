import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_WORKSTATION = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.sun_workstation;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 85,
  _height: 67,
}

export function SunWorkstation(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_WORKSTATION}
      {...props}
      _style={extendStyle(SUN_WORKSTATION, props)}
    />
  )
}
