import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12340_GAS_LOADED_ACCUMULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12340;points=[[0.5,1,0]]',
  },
  _width: 37.06,
  _height: 92.92,
}

export function X12340GasLoadedAccumulator(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X12340_GAS_LOADED_ACCUMULATOR)}
    />
  )
}
