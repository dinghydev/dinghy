import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFELINE_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;dashed=1;endArrow=none;align=center;verticalAlign=bottom;exitX=0.5;exitY=1;',
  },
  _original_width: 1,
  _original_height: 150,
}

export function Lifeline2(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE_2} {...props} _style={extendStyle(LIFELINE_2, props)} />
  )
}
