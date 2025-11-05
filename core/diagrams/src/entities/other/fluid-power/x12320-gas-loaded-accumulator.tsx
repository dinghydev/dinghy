import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12320_GAS_LOADED_ACCUMULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12320;points=[[0.5,1,0]]',
  },
  _width: 37.06,
  _height: 92.92,
}

export function X12320GasLoadedAccumulator(props: NodeProps) {
  return (
    <Shape
      {...X12320_GAS_LOADED_ACCUMULATOR}
      {...props}
      _style={extendStyle(X12320_GAS_LOADED_ACCUMULATOR, props)}
    />
  )
}
