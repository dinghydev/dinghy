import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HARBOR = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.harbor;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 90,
}

export function Harbor(props: DiagramNodeProps) {
  return <Shape {...HARBOR} {...props} _style={extendStyle(HARBOR, props)} />
}
