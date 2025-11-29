import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3G_4G_INDICATOR = {
  _style: {
    entity:
      'points=[[0.005,0.09,0],[0.08,0,0],[0.76,0.25,0],[1,0.92,0],[0.91,0.995,0],[0.57,0.995,0],[0.045,0.955,0],[0.005,0.43,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.3g_4g_indicator;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Component3g4gIndicator(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_3G_4G_INDICATOR)} />
  )
}
