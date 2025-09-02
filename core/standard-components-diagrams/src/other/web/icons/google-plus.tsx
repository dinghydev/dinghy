import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE_PLUS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.google_plus;fillColor=#F24B46;gradientColor=#AD3832',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function GooglePlus(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOOGLE_PLUS}
      {...props}
      _style={extendStyle(GOOGLE_PLUS, props)}
    />
  )
}
