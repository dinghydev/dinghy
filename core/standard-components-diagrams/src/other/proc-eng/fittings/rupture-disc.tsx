import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RUPTURE_DISC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.rupture_disc;',
  },
  _width: 50,
  _height: 100,
}

export function RuptureDisc(props: DiagramNodeProps) {
  return (
    <Shape
      {...RUPTURE_DISC}
      {...props}
      _style={extendStyle(RUPTURE_DISC, props)}
    />
  )
}
