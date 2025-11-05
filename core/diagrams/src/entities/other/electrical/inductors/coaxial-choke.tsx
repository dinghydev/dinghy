import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COAXIAL_CHOKE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.coaxial_choke;',
  },
  _width: 300,
  _height: 50,
}

export function CoaxialChoke(props: NodeProps) {
  return (
    <Shape
      {...COAXIAL_CHOKE}
      {...props}
      _style={extendStyle(COAXIAL_CHOKE, props)}
    />
  )
}
