import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPSWORKS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.opsworks;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Opsworks(props: DiagramNodeProps) {
  return (
    <Shape {...OPSWORKS} {...props} _style={extendStyle(OPSWORKS, props)} />
  )
}
