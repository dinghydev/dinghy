import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEALTHY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.healthy;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Healthy(props: DiagramNodeProps) {
  return <Shape {...HEALTHY} {...props} _style={extendStyle(HEALTHY, props)} />
}
