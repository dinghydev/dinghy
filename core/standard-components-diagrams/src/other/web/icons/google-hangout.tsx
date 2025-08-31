import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE_HANGOUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google_hangout;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function GoogleHangout(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOOGLE_HANGOUT}
      {...props}
      _style={extendStyle(GOOGLE_HANGOUT, props)}
    />
  )
}
