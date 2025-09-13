import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_OBJECT_2 = {
  _style: {
    entity:
      'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];rounded=1;dashed=1;dashPattern=5 2 1 2;labelPosition=center;verticalLabelPosition=middle;align=center;verticalAlign=middle;fontSize=8;html=1;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 80,
}

export function DataObject2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OBJECT_2}
      {...props}
      _style={extendStyle(DATA_OBJECT_2, props)}
    />
  )
}
