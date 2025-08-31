import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIX = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wix;strokeColor=#dddddd',
  _width: 74,
  _height: 61.6,
}

export function Wix(props: DiagramNodeProps) {
  return <Shape {...WIX} {...props} _style={extendStyle(WIX, props)} />
}
