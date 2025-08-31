import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLACIER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.glacier;fillColor=#E05243;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Glacier(props: DiagramNodeProps) {
  return <Shape {...GLACIER} {...props} _style={extendStyle(GLACIER, props)} />
}
