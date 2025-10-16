import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INPUT_OUTPUT_FILTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.input_output_filter;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function InputOutputFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...INPUT_OUTPUT_FILTER}
      {...props}
      _style={extendStyle(INPUT_OUTPUT_FILTER, props)}
    />
  )
}
