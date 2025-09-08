import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PYRAMID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#10739E;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function Pyramid(props: DiagramNodeProps) {
  return <Shape {...PYRAMID} {...props} _style={extendStyle(PYRAMID, props)} />
}
