import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMMIGRATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.immigration;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 99,
}

export function Immigration(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMMIGRATION}
      {...props}
      _style={extendStyle(IMMIGRATION, props)}
    />
  )
}
