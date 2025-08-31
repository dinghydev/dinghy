import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JAVASCRIPT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#205E00;gradientColor=none;',
  _width: 73.5,
  _height: 84,
}

export function Javascript(props: DiagramNodeProps) {
  return (
    <Shape {...JAVASCRIPT} {...props} _style={extendStyle(JAVASCRIPT, props)} />
  )
}
