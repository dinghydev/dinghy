import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEWSVINE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.newsvine;fillColor=#005221;strokeColor=none',
  },
  _width: 40.6,
  _height: 77.2,
}

export function Newsvine(props: NodeProps) {
  return (
    <Shape {...NEWSVINE} {...props} _style={extendStyle(NEWSVINE, props)} />
  )
}
