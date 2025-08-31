import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMR = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr;fillColor=#F58534;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function Emr(props: DiagramNodeProps) {
  return <Shape {...EMR} {...props} _style={extendStyle(EMR, props)} />
}
