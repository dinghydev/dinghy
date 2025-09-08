import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.acs;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 75,
  _original_height: 53,
}

export function Acs(props: DiagramNodeProps) {
  return <Shape {...ACS} {...props} _style={extendStyle(ACS, props)} />
}
