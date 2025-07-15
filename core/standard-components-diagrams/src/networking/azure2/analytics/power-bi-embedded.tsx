import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWER_BI_EMBEDDED = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Power_BI_Embedded.svg;',
  _width: 51,
  _height: 68,
}

export function PowerBiEmbedded(props: DiagramNodeProps) {
  return <Shape {...POWER_BI_EMBEDDED} {...props} />
}
