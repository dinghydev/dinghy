import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COVER_FLOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.coverFlow;strokeColor=#999999;',
  },
  _original_width: 400,
  _original_height: 200,
}

export function CoverFlow(props: DiagramNodeProps) {
  return (
    <Shape {...COVER_FLOW} {...props} _style={extendStyle(COVER_FLOW, props)} />
  )
}
