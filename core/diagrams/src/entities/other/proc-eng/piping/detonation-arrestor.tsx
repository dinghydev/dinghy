import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DETONATION_ARRESTOR = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.detonation_arrestor;',
  },
  _width: 50,
  _height: 20,
}

export function DetonationArrestor(props: NodeProps) {
  return (
    <Shape
      {...DETONATION_ARRESTOR}
      {...props}
      _style={extendStyle(DETONATION_ARRESTOR, props)}
    />
  )
}
