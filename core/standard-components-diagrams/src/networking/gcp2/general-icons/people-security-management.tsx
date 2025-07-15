import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PEOPLE_SECURITY_MANAGEMENT = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.people_security_management',
  _width: 100,
  _height: 100,
}

export function PeopleSecurityManagement(props: DiagramNodeProps) {
  return <Shape {...PEOPLE_SECURITY_MANAGEMENT} {...props} />
}
