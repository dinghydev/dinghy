import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_RECORDING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_recording;',
  },
  _width: 70,
  _height: 58,
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
