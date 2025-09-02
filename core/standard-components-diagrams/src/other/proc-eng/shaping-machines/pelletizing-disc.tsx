import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PELLETIZING_DISC = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.pelletizing_disc;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function PelletizingDisc(props: DiagramNodeProps) {
  return (
    <Shape
      {...PELLETIZING_DISC}
      {...props}
      _style={extendStyle(PELLETIZING_DISC, props)}
    />
  )
}
