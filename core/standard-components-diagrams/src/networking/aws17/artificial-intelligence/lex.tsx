import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEX = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.lex;fillColor=#2E73B8;gradientColor=none;',
  },
  _width: 76.5,
  _height: 81,
}

export function Lex(props: DiagramNodeProps) {
  return <Shape {...LEX} {...props} _style={extendStyle(LEX, props)} />
}
