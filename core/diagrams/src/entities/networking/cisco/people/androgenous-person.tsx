import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANDROGENOUS_PERSON = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.androgenous_person;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 69,
  _original_height: 82,
}

export function AndrogenousPerson(props: NodeProps) {
  return (
    <Shape
      {...ANDROGENOUS_PERSON}
      {...props}
      _style={extendStyle(ANDROGENOUS_PERSON, props)}
    />
  )
}
