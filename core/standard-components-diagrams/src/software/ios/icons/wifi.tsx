import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIFI = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.wifi;pointerEvents=1',
  _width: 29.7,
  _height: 21,
}

export function Wifi(props: DiagramNodeProps) {
  return <Shape {...WIFI} {...props} />
}
