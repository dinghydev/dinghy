import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIER_FLUIDIZED_BED = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.drier_(fluidized_bed);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 140,
}

export function DrierFluidizedBed(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRIER_FLUIDIZED_BED}
      {...props}
      _style={extendStyle(DRIER_FLUIDIZED_BED, props)}
    />
  )
}
