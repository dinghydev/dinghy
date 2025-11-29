import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_ENVIRONMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Web_Environment.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 66,
}

export function WebEnvironment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEB_ENVIRONMENT)} />
}
