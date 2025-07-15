import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRESSURIZED_VESSEL = {
  _style:
    'shape=mxgraph.pid.vessels.pressurized_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 200,
}

export function PressurizedVessel(props: DiagramNodeProps) {
  return <Shape {...PRESSURIZED_VESSEL} {...props} />
}
