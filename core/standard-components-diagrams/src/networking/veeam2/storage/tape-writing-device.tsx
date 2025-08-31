import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_WRITING_DEVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_writing_device;',
  },
  _width: 38,
  _height: 14.000000000000002,
}

export function TapeWritingDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_WRITING_DEVICE}
      {...props}
      _style={extendStyle(TAPE_WRITING_DEVICE, props)}
    />
  )
}
