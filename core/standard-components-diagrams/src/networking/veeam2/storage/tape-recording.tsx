import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE_RECORDING = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_recording;',
  _width: 46,
  _height: 30,
}

export function TapeRecording(props: DiagramNodeProps) {
  return <Shape {...TAPE_RECORDING} {...props} />
}
