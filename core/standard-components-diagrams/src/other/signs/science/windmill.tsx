import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDMILL = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.windmill;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 72,
  _original_height: 99,
}

export function Windmill(props: DiagramNodeProps) {
  return (
    <Shape {...WINDMILL} {...props} _style={extendStyle(WINDMILL, props)} />
  )
}
