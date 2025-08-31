import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWITTER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.twitter;fillColor=#1DA1F2;strokeColor=none',
  },
  _width: 80,
  _height: 70,
}

export function Twitter(props: DiagramNodeProps) {
  return <Shape {...TWITTER} {...props} _style={extendStyle(TWITTER, props)} />
}
