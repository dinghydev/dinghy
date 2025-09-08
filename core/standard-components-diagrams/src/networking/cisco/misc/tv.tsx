import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TV = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.tv;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 53,
  _original_height: 53,
}

export function Tv(props: DiagramNodeProps) {
  return <Shape {...TV} {...props} _style={extendStyle(TV, props)} />
}
