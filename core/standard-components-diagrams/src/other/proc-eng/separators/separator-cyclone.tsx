import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEPARATOR_CYCLONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(cyclone)2;',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorCyclone(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_CYCLONE}
      {...props}
      _style={extendStyle(SEPARATOR_CYCLONE, props)}
    />
  )
}
