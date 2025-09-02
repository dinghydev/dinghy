import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INPUT_OUTPUT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Input_Output.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 55.00000000000001,
}

export function InputOutput(props: DiagramNodeProps) {
  return (
    <Shape
      {...INPUT_OUTPUT}
      {...props}
      _style={extendStyle(INPUT_OUTPUT, props)}
    />
  )
}
