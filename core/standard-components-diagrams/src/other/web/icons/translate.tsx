import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSLATE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.translate;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Translate(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSLATE} {...props} _style={extendStyle(TRANSLATE, props)} />
  )
}
