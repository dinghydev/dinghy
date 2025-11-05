import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECHO = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.echo;fillColor=#205B99;gradientColor=none;',
  },
  _width: 40.5,
  _height: 93,
}

export function Echo(props: NodeProps) {
  return <Shape {...ECHO} {...props} _style={extendStyle(ECHO, props)} />
}
