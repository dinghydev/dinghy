import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DESKTOP_PC = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.desktop_pc;network2IconXOffset=-0.0034;network2IconYOffset=0.00035;network2IconW=0.453;network2IconH=0.9995;',
  },
  _width: 22.650000000000002,
  _height: 49.975,
}

export function DesktopPc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DESKTOP_PC)} />
}
