import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLATEAU = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.tech;techType=plateau',
  },
  _width: 100,
  _height: 75,
}

export function Plateau(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PLATEAU)} />
}
