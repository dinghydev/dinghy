import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Azure_Stack.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 64,
}

export function Stack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STACK)} />
}
