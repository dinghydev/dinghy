import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TDM_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.tdm_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 53,
}

export function TdmRouter(props: DiagramNodeProps) {
  return (
    <Shape {...TDM_ROUTER} {...props} _style={extendStyle(TDM_ROUTER, props)} />
  )
}
