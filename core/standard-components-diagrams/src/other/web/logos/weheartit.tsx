import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEHEARTIT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.weheartit;fillColor=#FF4577;strokeColor=none',
  },
  _width: 82.2,
  _height: 69.60000000000001,
}

export function Weheartit(props: DiagramNodeProps) {
  return (
    <Shape {...WEHEARTIT} {...props} _style={extendStyle(WEHEARTIT, props)} />
  )
}
