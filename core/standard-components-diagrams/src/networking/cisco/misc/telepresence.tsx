import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TELEPRESENCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.telepresence;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 138,
  _original_height: 50,
}

export function Telepresence(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELEPRESENCE}
      {...props}
      _style={extendStyle(TELEPRESENCE, props)}
    />
  )
}
