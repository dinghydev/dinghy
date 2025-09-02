import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12330_GAS_LOADED_ACCUMULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12330;points=[[0.5,1,0]]',
  },
  _original_width: 37.06,
  _original_height: 92.92,
}

export function X12330GasLoadedAccumulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12330_GAS_LOADED_ACCUMULATOR}
      {...props}
      _style={extendStyle(X12330_GAS_LOADED_ACCUMULATOR, props)}
    />
  )
}
