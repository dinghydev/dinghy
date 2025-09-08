import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CRT_TV = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.crt_tv;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function CrtTv(props: DiagramNodeProps) {
  return <Shape {...CRT_TV} {...props} _style={extendStyle(CRT_TV, props)} />
}
