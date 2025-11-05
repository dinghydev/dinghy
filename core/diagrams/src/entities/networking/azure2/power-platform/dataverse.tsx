import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATAVERSE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/Dataverse.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52.400000000000006,
}

export function Dataverse(props: NodeProps) {
  return (
    <Shape {...DATAVERSE} {...props} _style={extendStyle(DATAVERSE, props)} />
  )
}
