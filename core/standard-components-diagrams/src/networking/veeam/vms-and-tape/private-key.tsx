import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATE_KEY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.private_key;',
  },
  _width: 55.6,
  _height: 50.8,
}

export function PrivateKey(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_KEY}
      {...props}
      _style={extendStyle(PRIVATE_KEY, props)}
    />
  )
}
