import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONS15500 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ons15500;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 72,
}

export function Ons15500(props: DiagramNodeProps) {
  return (
    <Shape {...ONS15500} {...props} _style={extendStyle(ONS15500, props)} />
  )
}
