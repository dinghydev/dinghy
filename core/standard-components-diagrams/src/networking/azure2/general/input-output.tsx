import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INPUT_OUTPUT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Input_Output.svg;strokeColor=none;',
  _width: 64,
  _height: 55.00000000000001,
}

export function InputOutput(props: DiagramNodeProps) {
  return <Shape {...INPUT_OUTPUT} {...props} />
}
