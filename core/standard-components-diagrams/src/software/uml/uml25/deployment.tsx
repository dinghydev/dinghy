import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEPLOYMENT = {
  _style: {
    entity:
      'verticalAlign=top;align=left;shape=cube;size=10;direction=south;fontStyle=0;html=1;boundedLbl=1;spacingLeft=5;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 140,
}

export function Deployment(props: DiagramNodeProps) {
  return (
    <Shape {...DEPLOYMENT} {...props} _style={extendStyle(DEPLOYMENT, props)} />
  )
}
