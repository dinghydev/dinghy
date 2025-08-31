import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEOPLE_SECURITY_MANAGEMENT = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.people_security_management',
  _width: 60,
  _height: 60,
}

export function PeopleSecurityManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...PEOPLE_SECURITY_MANAGEMENT}
      {...props}
      _style={extendStyle(PEOPLE_SECURITY_MANAGEMENT, props)}
    />
  )
}
