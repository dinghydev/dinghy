import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPRAYING_DEVICE = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.spraying_device;pointerEvents=1;',
  _width: 60,
  _height: 20,
}

export function SprayingDevice(props: DiagramNodeProps) {
  return <Shape {...SPRAYING_DEVICE} {...props} />
}
