import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BBSM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.bbsm;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 101,
  _original_height: 42,
}

export function Bbsm(props: DiagramNodeProps) {
  return <Shape {...BBSM} {...props} _style={extendStyle(BBSM, props)} />
}
