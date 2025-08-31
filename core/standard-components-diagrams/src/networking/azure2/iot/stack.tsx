import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Azure_Stack.svg;strokeColor=none;',
  _width: 65.88000000000001,
  _height: 68,
}

export function Stack(props: DiagramNodeProps) {
  return <Shape {...STACK} {...props} _style={extendStyle(STACK, props)} />
}
