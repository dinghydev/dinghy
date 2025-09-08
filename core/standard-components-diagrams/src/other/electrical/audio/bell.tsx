import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BELL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.bell;',
  },
  _original_width: 47,
  _original_height: 60,
}

export function Bell(props: DiagramNodeProps) {
  return <Shape {...BELL} {...props} _style={extendStyle(BELL, props)} />
}
