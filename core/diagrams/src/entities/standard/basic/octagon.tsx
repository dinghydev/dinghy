import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OCTAGON = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shape=mxgraph.basic.octagon2;align=center;verticalAlign=middle;dx=15;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Octagon(props: NodeProps) {
  return <Shape {...OCTAGON} {...props} _style={extendStyle(OCTAGON, props)} />
}
