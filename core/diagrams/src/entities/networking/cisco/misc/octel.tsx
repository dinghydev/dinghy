import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OCTEL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.octel;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 74,
  _original_height: 61,
}

export function Octel(props: DiagramNodeProps) {
  return <Shape {...OCTEL} {...props} _style={extendStyle(OCTEL, props)} />
}
