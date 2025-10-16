import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PAD_2 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.pad_2;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 85,
  _height: 48,
}

export function Pad2(props: DiagramNodeProps) {
  return <Shape {...PAD_2} {...props} _style={extendStyle(PAD_2, props)} />
}
