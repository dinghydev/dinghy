import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELECTRET_MICROPHONE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.electret_microphone;',
  _width: 70,
  _height: 70,
}

export function ElectretMicrophone(props: DiagramNodeProps) {
  return <Shape {...ELECTRET_MICROPHONE} {...props} />
}
