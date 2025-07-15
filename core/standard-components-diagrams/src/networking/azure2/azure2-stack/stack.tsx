import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Azure_Stack.svg;',
  _width: 62,
  _height: 64,
}

export function Stack(props: DiagramNodeProps) {
  return <Shape {...STACK} {...props} />
}
