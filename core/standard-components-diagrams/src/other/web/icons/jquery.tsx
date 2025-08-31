import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JQUERY = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.jquery;fillColor=#0BB9EA;gradientColor=#032F80',
  _width: 102.4,
  _height: 102.4,
}

export function Jquery(props: DiagramNodeProps) {
  return <Shape {...JQUERY} {...props} _style={extendStyle(JQUERY, props)} />
}
