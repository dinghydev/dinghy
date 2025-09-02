import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BARREL_DRUM_ISO = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.barrel,_drum_(iso);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function BarrelDrumIso(props: DiagramNodeProps) {
  return (
    <Shape
      {...BARREL_DRUM_ISO}
      {...props}
      _style={extendStyle(BARREL_DRUM_ISO, props)}
    />
  )
}
