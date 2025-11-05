import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CERES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Ceres.svg;strokeColor=none;',
  },
  _original_width: 59.199999999999996,
  _original_height: 68,
}

export function Ceres(props: NodeProps) {
  return <Shape {...CERES} {...props} _style={extendStyle(CERES, props)} />
}
