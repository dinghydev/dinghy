import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sts;fillColor=#759C3E;gradientColor=none;',
  _width: 61.5,
  _height: 34.5,
}

export function Sts(props: DiagramNodeProps) {
  return <Shape {...STS} {...props} _style={extendStyle(STS, props)} />
}
