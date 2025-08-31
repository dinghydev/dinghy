import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_METER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Meter.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DefenderMeter(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_METER}
      {...props}
      _style={extendStyle(DEFENDER_METER, props)}
    />
  )
}
