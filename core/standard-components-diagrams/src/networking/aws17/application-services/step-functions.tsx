import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_FUNCTIONS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.step_functions;fillColor=#D9A741;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function StepFunctions(props: DiagramNodeProps) {
  return <Shape {...STEP_FUNCTIONS} {...props} />
}
