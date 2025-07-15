import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANDROGENOUS_PERSON = {
  _style:
    'shape=mxgraph.cisco.people.androgenous_person;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 69,
  _height: 82,
}

export function AndrogenousPerson(props: DiagramNodeProps) {
  return <Shape {...ANDROGENOUS_PERSON} {...props} />
}
