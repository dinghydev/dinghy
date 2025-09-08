import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_WRITING_DEVICE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.tape_writing_device;',
  },
  _original_width: 82.4,
  _original_height: 43.6,
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
