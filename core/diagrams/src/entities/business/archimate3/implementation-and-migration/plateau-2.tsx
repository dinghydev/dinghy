import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLATEAU_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.plateau;',
  },
  _width: 60,
  _height: 40,
}

export function Plateau2(props: NodeProps) {
  return (
    <Shape {...PLATEAU_2} {...props} _style={extendStyle(PLATEAU_2, props)} />
  )
}
