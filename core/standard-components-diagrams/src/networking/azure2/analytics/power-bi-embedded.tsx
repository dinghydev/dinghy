import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWER_BI_EMBEDDED = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Power_BI_Embedded.svg;strokeColor=none;',
  _width: 51,
  _height: 68,
}

export function PowerBiEmbedded(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWER_BI_EMBEDDED}
      {...props}
      _style={extendStyle(POWER_BI_EMBEDDED, props)}
    />
  )
}
