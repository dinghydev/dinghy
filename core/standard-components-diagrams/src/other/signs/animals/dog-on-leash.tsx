import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOG_ON_LEASH = {
  _style:
    'shape=mxgraph.signs.animals.dog_on_leash;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 97,
  _height: 91,
}

export function DogOnLeash(props: DiagramNodeProps) {
  return <Shape {...DOG_ON_LEASH} {...props} />
}
