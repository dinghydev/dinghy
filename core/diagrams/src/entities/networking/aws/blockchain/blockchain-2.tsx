import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOCKCHAIN_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.blockchain_resource;',
  },
  _width: 78,
  _height: 25,
}

export function Blockchain2(props: NodeProps) {
  return (
    <Shape
      {...BLOCKCHAIN_2}
      {...props}
      _style={extendStyle(BLOCKCHAIN_2, props)}
    />
  )
}
