import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCREEN_NAME_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iScreenNameBar;fillColor2=#000000;fillColor3=#ffffff;buttonText=;fontColor=#ffffff;fontSize=10;whiteSpace=wrap;align=center;sketch=0;',
  },
  _width: 174,
  _height: 25,
}

export function ScreenNameBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCREEN_NAME_BAR)} />
}
