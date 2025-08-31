import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRESSURIZED_VESSEL = {
  _style:
    'shape=mxgraph.pid.vessels.pressurized_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 200,
}

export function PressurizedVessel(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRESSURIZED_VESSEL}
      {...props}
      _style={extendStyle(PRESSURIZED_VESSEL, props)}
    />
  )
}
