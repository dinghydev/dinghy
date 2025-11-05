import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOAD_BALANCING = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.load_balancing;',
  },
  _width: 96,
  _height: 20.13,
}

export function LoadBalancing(props: NodeProps) {
  return (
    <Shape
      {...LOAD_BALANCING}
      {...props}
      _style={extendStyle(LOAD_BALANCING, props)}
    />
  )
}
