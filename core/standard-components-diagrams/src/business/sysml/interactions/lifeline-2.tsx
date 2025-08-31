import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFELINE_2 = {
  _style:
    'edgeStyle=none;html=1;dashed=1;endArrow=none;align=center;verticalAlign=bottom;exitX=0.5;exitY=1;',
  _width: 1,
  _height: 150,
}

export function Lifeline2(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE_2} {...props} _style={extendStyle(LIFELINE_2, props)} />
  )
}
