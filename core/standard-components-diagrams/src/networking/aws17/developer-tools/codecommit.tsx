import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CODECOMMIT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codecommit;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Codecommit(props: DiagramNodeProps) {
  return (
    <Shape {...CODECOMMIT} {...props} _style={extendStyle(CODECOMMIT, props)} />
  )
}
