import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JUMBOTRON = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=#E9ECEF;fontColor=#474E4F;align=left;spacing=15;fontSize=14;verticalAlign=top;spacingTop=40;',
  },
  _width: 0,
  _height: 300,
}

export function Jumbotron(props: NodeProps) {
  return (
    <Shape {...JUMBOTRON} {...props} _style={extendStyle(JUMBOTRON, props)} />
  )
}
