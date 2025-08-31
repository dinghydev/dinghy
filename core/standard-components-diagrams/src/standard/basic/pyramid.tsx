import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PYRAMID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.pyramid;dx1=0.4;dx2=0.6;dy1=0.9;dy2=0.8;',
  },
  _width: 60,
  _height: 60,
}

export function Pyramid(props: DiagramNodeProps) {
  return <Shape {...PYRAMID} {...props} _style={extendStyle(PYRAMID, props)} />
}
