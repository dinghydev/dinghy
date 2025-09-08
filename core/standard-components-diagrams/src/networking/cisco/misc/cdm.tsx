import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CDM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.cdm;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 93,
  _original_height: 59,
}

export function Cdm(props: DiagramNodeProps) {
  return <Shape {...CDM} {...props} _style={extendStyle(CDM, props)} />
}
