import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INPUT_OUTPUT_FILTER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/input_output_filter.svg;strokeColor=none;',
  _width: 33.5,
  _height: 50,
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
