import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_CHECKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape_checked;',
  },
  _width: 75.2,
  _height: 45.6,
}

export function TapeChecked(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_CHECKED}
      {...props}
      _style={extendStyle(TAPE_CHECKED, props)}
    />
  )
}
