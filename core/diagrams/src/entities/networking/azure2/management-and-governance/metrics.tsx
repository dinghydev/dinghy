import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const METRICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Metrics.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 65,
}

export function Metrics(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, METRICS)} />
}
