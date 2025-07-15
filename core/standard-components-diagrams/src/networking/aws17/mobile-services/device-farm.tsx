import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_FARM = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.device_farm;fillColor=#AD688B;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function DeviceFarm(props: DiagramNodeProps) {
  return <Shape {...DEVICE_FARM} {...props} />
}
