import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_EJECT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape_ejecting;',
  },
  _original_width: 75.6,
  _original_height: 49.6,
}

export function TapeEject(props: DiagramNodeProps) {
  return (
    <Shape {...TAPE_EJECT} {...props} _style={extendStyle(TAPE_EJECT, props)} />
  )
}
