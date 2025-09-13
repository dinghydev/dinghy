import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLAME_ARRESTOR = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.flame_arrestor;',
  },
  _width: 50,
  _height: 20,
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
