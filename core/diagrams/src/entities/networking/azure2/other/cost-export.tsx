import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COST_EXPORT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Cost_Export.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52.72,
}

export function CostExport(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COST_EXPORT)} />
}
