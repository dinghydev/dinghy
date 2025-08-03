import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_UNDERSTANDING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_Object_Understanding.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ObjectUnderstanding(props: DiagramNodeProps) {
  return <Shape {...OBJECT_UNDERSTANDING} {...props} />
}
