import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BARREL_DRUM_ISO = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.barrel,_drum_(iso);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 100,
}

export function BarrelDrumIso(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BARREL_DRUM_ISO)} />
}
