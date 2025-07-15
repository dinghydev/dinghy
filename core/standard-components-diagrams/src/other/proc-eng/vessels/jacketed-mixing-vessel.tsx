import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JACKETED_MIXING_VESSEL = {
  _style:
    'shape=mxgraph.pid.vessels.jacketed_mixing_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 174,
}

export function JacketedMixingVessel(props: DiagramNodeProps) {
  return <Shape {...JACKETED_MIXING_VESSEL} {...props} />
}
