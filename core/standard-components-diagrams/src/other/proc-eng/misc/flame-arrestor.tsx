import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLAME_ARRESTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.flame_arrestor;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function FlameArrestor(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLAME_ARRESTOR}
      {...props}
      _style={extendStyle(FLAME_ARRESTOR, props)}
    />
  )
}
