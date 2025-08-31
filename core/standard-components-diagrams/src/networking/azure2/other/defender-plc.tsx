import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_PLC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_PLC.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DefenderPlc(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_PLC}
      {...props}
      _style={extendStyle(DEFENDER_PLC, props)}
    />
  )
}
