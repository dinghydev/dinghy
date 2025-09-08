import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_RECORDING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape_recording;',
  },
  _original_width: 71.2,
  _original_height: 47.2,
}

export function TapeRecording(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_RECORDING}
      {...props}
      _style={extendStyle(TAPE_RECORDING, props)}
    />
  )
}
