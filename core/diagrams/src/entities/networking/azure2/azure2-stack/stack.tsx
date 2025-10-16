import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Azure_Stack.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 64,
}

export function Stack(props: DiagramNodeProps) {
  return <Shape {...STACK} {...props} _style={extendStyle(STACK, props)} />
}
