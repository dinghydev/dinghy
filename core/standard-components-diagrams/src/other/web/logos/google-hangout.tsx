import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE_HANGOUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_hangout;fillColor=#4BA139;strokeColor=none',
  },
  _original_width: 64.8,
  _original_height: 75.4,
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
