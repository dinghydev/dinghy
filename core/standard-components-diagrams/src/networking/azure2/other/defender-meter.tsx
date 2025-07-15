import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_METER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Meter.svg;',
  _width: 68,
  _height: 68,
}

export function DefenderMeter(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_METER} {...props} />
}
