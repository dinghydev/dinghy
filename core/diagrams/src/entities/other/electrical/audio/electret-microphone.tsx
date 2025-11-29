import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTRET_MICROPHONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.electret_microphone;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function ElectretMicrophone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ELECTRET_MICROPHONE)} />
}
