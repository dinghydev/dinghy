import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOG_ON_LEASH = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.dog_on_leash;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 91,
}

export function DogOnLeash(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOG_ON_LEASH)} />
}
