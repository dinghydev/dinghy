import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMBUSTION_CHAMBER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.combustion_chamber;',
  _width: 130,
  _height: 100,
}

export function CombustionChamber(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMBUSTION_CHAMBER}
      {...props}
      _style={extendStyle(COMBUSTION_CHAMBER, props)}
    />
  )
}
