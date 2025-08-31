import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_LOCKED = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.tape_locked;',
  _width: 70.4,
  _height: 40,
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
