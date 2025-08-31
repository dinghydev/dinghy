import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_CENTER = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.data_center;',
  _width: 76,
  _height: 50,
}

export function DataCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_CENTER}
      {...props}
      _style={extendStyle(DATA_CENTER, props)}
    />
  )
}
