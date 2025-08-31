import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Google(props: DiagramNodeProps) {
  return <Shape {...GOOGLE} {...props} _style={extendStyle(GOOGLE, props)} />
}
