import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MYSPACE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.myspace;fillColor=#3C69E2;gradientColor=#101B54',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Myspace(props: DiagramNodeProps) {
  return <Shape {...MYSPACE} {...props} _style={extendStyle(MYSPACE, props)} />
}
