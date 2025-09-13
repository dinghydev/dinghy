import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMAGE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=bottom;align=left;spacing=20;fontSize=14;',
  },
  _width: 0,
  _height: 260,
}

export function Image(props: DiagramNodeProps) {
  return <Shape {...IMAGE} {...props} _style={extendStyle(IMAGE, props)} />
}
