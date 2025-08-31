import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_UI = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.web_ui;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function WebUi(props: DiagramNodeProps) {
  return <Shape {...WEB_UI} {...props} _style={extendStyle(WEB_UI, props)} />
}
