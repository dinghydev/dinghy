import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDTECH_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/MedTech_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.72,
}

export function MedtechService(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDTECH_SERVICE}
      {...props}
      _style={extendStyle(MEDTECH_SERVICE, props)}
    />
  )
}
