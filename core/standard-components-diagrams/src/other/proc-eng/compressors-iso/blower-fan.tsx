import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOWER_FAN = {
  _style:
    'shape=mxgraph.pid.compressors_-_iso.blower,_fan;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function BlowerFan(props: DiagramNodeProps) {
  return <Shape {...BLOWER_FAN} {...props} />
}
