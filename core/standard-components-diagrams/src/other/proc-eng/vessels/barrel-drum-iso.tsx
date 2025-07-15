import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BARREL_DRUM_ISO = {
  _style:
    'shape=mxgraph.pid.vessels.barrel,_drum_(iso);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 100,
}

export function BarrelDrumIso(props: DiagramNodeProps) {
  return <Shape {...BARREL_DRUM_ISO} {...props} />
}
