import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OCTAGON = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shape=mxgraph.basic.octagon2;align=center;verticalAlign=middle;dx=15;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Octagon(props: DiagramNodeProps) {
  return <Shape {...OCTAGON} {...props} _style={extendStyle(OCTAGON, props)} />
}
