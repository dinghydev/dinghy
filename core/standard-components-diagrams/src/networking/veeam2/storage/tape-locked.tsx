import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_LOCKED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_locked;',
  },
  _original_width: 46,
  _original_height: 30,
}

export function TapeLocked(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_LOCKED}
      {...props}
      _style={extendStyle(TAPE_LOCKED, props)}
    />
  )
}
