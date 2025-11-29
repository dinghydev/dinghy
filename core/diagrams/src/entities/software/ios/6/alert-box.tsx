import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALERT_BOX = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.fancyRRect;rSize=8;strokeColor=#dddddd;fillColor=#497198;gradientColor=#193168;opacity=80;fontColor=#ffffff;fontSize=8;whiteSpace=wrap;align=center;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Helvetica;',
  },
  _width: 150,
  _height: 100,
}

export function AlertBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALERT_BOX)} />
}
