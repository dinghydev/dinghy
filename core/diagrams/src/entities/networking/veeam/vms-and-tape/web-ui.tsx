import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_UI = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.web_ui;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function WebUi(props: NodeProps) {
  return <Shape {...WEB_UI} {...props} _style={extendStyle(WEB_UI, props)} />
}
