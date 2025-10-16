import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LICENSE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.license;',
  },
  _original_width: 50.8,
  _original_height: 56.4,
}

export function License(props: DiagramNodeProps) {
  return <Shape {...LICENSE} {...props} _style={extendStyle(LICENSE, props)} />
}
