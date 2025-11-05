import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.apps;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 81,
  _original_height: 79.5,
}

export function Apps(props: NodeProps) {
  return <Shape {...APPS} {...props} _style={extendStyle(APPS, props)} />
}
