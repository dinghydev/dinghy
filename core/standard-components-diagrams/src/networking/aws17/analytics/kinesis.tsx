import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KINESIS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis;fillColor=#F58534;gradientColor=none;',
  },
  _width: 67.5,
  _height: 81,
}

export function Kinesis(props: DiagramNodeProps) {
  return <Shape {...KINESIS} {...props} _style={extendStyle(KINESIS, props)} />
}
