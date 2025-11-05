import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALL_RESOURCES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/All_Resources.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function AllResources(props: NodeProps) {
  return (
    <Shape
      {...ALL_RESOURCES}
      {...props}
      _style={extendStyle(ALL_RESOURCES, props)}
    />
  )
}
