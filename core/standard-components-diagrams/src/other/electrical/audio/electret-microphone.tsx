import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTRET_MICROPHONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.electret_microphone;',
  },
  _width: 60,
  _height: 60,
}

export function ElectretMicrophone(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTRET_MICROPHONE}
      {...props}
      _style={extendStyle(ELECTRET_MICROPHONE, props)}
    />
  )
}
