import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_EJECTING = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_ejecting;',
  _width: 70,
  _height: 58,
}

export function TapeEjecting(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_EJECTING}
      {...props}
      _style={extendStyle(TAPE_EJECTING, props)}
    />
  )
}
