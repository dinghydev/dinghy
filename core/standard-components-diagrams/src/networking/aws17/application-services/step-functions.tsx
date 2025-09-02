import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP_FUNCTIONS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.step_functions;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function StepFunctions(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_FUNCTIONS}
      {...props}
      _style={extendStyle(STEP_FUNCTIONS, props)}
    />
  )
}
