import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUSTRIAL_IOT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Industrial_IoT.svg;strokeColor=none;',
  },
  _original_width: 62.8,
  _original_height: 68,
}

export function IndustrialIot(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_IOT}
      {...props}
      _style={extendStyle(INDUSTRIAL_IOT, props)}
    />
  )
}
