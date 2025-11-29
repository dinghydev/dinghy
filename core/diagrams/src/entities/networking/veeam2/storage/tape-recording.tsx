import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_RECORDING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_recording;',
  },
  _width: 46,
  _height: 30,
}

export function TapeRecording(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_RECORDING)} />
}
