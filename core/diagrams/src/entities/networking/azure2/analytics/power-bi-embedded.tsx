import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWER_BI_EMBEDDED = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Power_BI_Embedded.svg;strokeColor=none;',
  },
  _original_width: 51,
  _original_height: 68,
}

export function PowerBiEmbedded(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POWER_BI_EMBEDDED)} />
}
