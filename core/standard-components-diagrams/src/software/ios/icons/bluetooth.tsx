import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLUETOOTH = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bluetooth;pointerEvents=1',
  _width: 15,
  _height: 28.799999999999997,
}

export function Bluetooth(props: DiagramNodeProps) {
  return <Shape {...BLUETOOTH} {...props} />
}
