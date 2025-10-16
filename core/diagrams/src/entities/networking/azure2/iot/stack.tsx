import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Azure_Stack.svg;strokeColor=none;',
  },
  _original_width: 65.88000000000001,
  _original_height: 68,
}

export function Stack(props: DiagramNodeProps) {
  return <Shape {...STACK} {...props} _style={extendStyle(STACK, props)} />
}
