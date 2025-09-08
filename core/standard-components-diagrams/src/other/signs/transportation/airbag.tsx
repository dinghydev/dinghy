import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AIRBAG = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airbag;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 103,
  _original_height: 96,
}

export function Airbag(props: DiagramNodeProps) {
  return <Shape {...AIRBAG} {...props} _style={extendStyle(AIRBAG, props)} />
}
