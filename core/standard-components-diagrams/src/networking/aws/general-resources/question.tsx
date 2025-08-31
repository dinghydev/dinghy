import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUESTION = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.question;',
  _width: 41,
  _height: 78,
}

export function Question(props: DiagramNodeProps) {
  return (
    <Shape {...QUESTION} {...props} _style={extendStyle(QUESTION, props)} />
  )
}
