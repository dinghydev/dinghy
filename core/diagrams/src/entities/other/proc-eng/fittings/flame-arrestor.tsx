import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLAME_ARRESTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flame_arrestor;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function FlameArrestor(props: NodeProps) {
  return (
    <Shape
      {...FLAME_ARRESTOR}
      {...props}
      _style={extendStyle(FLAME_ARRESTOR, props)}
    />
  )
}
