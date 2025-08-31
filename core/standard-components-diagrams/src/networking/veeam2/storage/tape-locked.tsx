import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_LOCKED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_locked;',
  },
  _width: 46,
  _height: 30,
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
