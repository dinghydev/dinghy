import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const METRO_1500 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.metro_1500;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 66,
  _original_height: 58,
}

export function Metro1500(props: DiagramNodeProps) {
  return (
    <Shape {...METRO_1500} {...props} _style={extendStyle(METRO_1500, props)} />
  )
}
