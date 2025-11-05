import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PATCH_PANEL = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.patch_panel;network2IconXOffset=0.0001;network2IconYOffset=-0.0211;network2IconW=1;network2IconH=0.3359;',
  },
  _width: 50,
  _height: 16.794999999999998,
}

export function PatchPanel(props: NodeProps) {
  return (
    <Shape
      {...PATCH_PANEL}
      {...props}
      _style={extendStyle(PATCH_PANEL, props)}
    />
  )
}
