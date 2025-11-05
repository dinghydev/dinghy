import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOM_IP_PREFIX = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Custom_IP_Prefix.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CustomIpPrefix(props: NodeProps) {
  return (
    <Shape
      {...CUSTOM_IP_PREFIX}
      {...props}
      _style={extendStyle(CUSTOM_IP_PREFIX, props)}
    />
  )
}
