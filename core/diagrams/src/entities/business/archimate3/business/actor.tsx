import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTOR = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.archimate3.actor;',
  },
  _width: 26.5,
  _height: 50,
}

export function Actor(props: NodeProps) {
  return <Shape {...ACTOR} {...props} _style={extendStyle(ACTOR, props)} />
}
