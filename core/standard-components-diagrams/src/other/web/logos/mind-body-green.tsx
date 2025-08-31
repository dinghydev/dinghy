import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIND_BODY_GREEN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.mind_body_green;strokeColor=#888888',
  },
  _width: 81.4,
  _height: 92.80000000000001,
}

export function MindBodyGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIND_BODY_GREEN}
      {...props}
      _style={extendStyle(MIND_BODY_GREEN, props)}
    />
  )
}
