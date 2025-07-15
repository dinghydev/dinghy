import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROGRAMMING_LANGUAGE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.programming_language;',
  _width: 78,
  _height: 51,
}

export function ProgrammingLanguage(props: DiagramNodeProps) {
  return <Shape {...PROGRAMMING_LANGUAGE} {...props} />
}
