import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PATCH_PANEL = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.patch_panel;',
  },
  _width: 100,
  _height: 35,
}

export function PatchPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...PATCH_PANEL}
      {...props}
      _style={extendStyle(PATCH_PANEL, props)}
    />
  )
}
